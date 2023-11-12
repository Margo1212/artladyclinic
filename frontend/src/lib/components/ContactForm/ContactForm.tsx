"use client";

import emailjs from "@emailjs/browser";
import { FormikHelpers, useFormik } from "formik";
import * as Yup from "yup";
import { Input } from "@components/Input/Input";
import { TextArea } from "@components/TextArea/TextArea";
import { Checkbox, FormControlLabel } from "@mui/material";
import { indigo, pink } from "@mui/material/colors";

type UserSubmitForm = {
  name: string;
  email: string;
  title: string;
  message: string;
};

export const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      title: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Username is required")
        .min(3, "Username must be at least 6 characters")
        .max(20, "Username must not exceed 20 characters"),
      email: Yup.string()
        .required("Email is required")
        .email("Email is invalid"),
      title: Yup.string().required("Title is required"),
      message: Yup.string()
        .required("Message is required")
        .min(10, "Message must be at least 10 characters"),
    }),
    onSubmit: (
      values: UserSubmitForm,
      { setSubmitting }: FormikHelpers<UserSubmitForm>
    ) => {
      try {
        emailjs
          .send(
            "service_yse5tug",
            "template_wn4vxb2",
            values,
            "xxxIaxYoLEn78ySPn"
          )
          .then(() => {
            setSubmitting(false);
            alert("Message sended");
            window.location.reload();
          });
      } catch {
        setSubmitting(false);
      }
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className="py-0 w-full space-y-5 mt-7">
      <Input
        onChange={formik.handleChange}
        type="text"
        name="name"
        placeholder="Imię i nazwisko"
        value={formik.values.name}
      />
      {formik.touched.name && formik.errors.name && (
        <span className="text-alert text-xs">{formik.errors.name}</span>
      )}
      <Input
        name="email"
        placeholder="Adres email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email && (
        <span className="text-alert text-xs p-0 m-0">
          {formik.errors.email}
        </span>
      )}
      <Input
        onChange={formik.handleChange}
        value={formik.values.title}
        name="title"
        placeholder="Tytul"
        type="tel"
      />
      {formik.touched.title && formik.errors.title && (
        <span className="text-alert text-xs p-0 m-0">
          {formik.errors.title}
        </span>
      )}
      <TextArea
        onChange={formik.handleChange}
        value={formik.values.message}
        name="message"
        placeholder="Wiadomość"
      />
      {formik.touched.message && formik.errors.message && (
        <span className="text-alert text-xs p-0 ">{formik.errors.message}</span>
      )}
      <p className="text-xs">
        Wyrażam zgodę na przetwarzanie danych osobowych podanych w formularzu
        zgodnie z ogólnym rozporządzeniem o ochronie danych (RODO) w celu:
      </p>
      <FormControlLabel
        required
        control={
          <Checkbox
            sx={{
              color: indigo[900],
              "&.Mui-checked": {
                color: indigo[900],
              },
            }}
          />
        }
        label={
          <p className="text-xs">
            udzielenia odpowiedzi na wpisane w formularzu kontaktowym zapytanie
          </p>
        }
      />

      <button className="transition ease-in-out duration-300 bg-dark-blue hover:bg-dark-blue/90 rounded-md font-medium text-white py-3 px-6 w-full">
        Wyślij
      </button>
    </form>
  );
};
