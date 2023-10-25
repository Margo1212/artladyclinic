"use client";

import emailjs from "@emailjs/browser";
import { FormikHelpers, useFormik } from "formik";
import * as Yup from "yup";
import { Input } from "@components/Input/Input";
import { TextArea } from "@components/TextArea/TextArea";

type UserSubmitForm = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Username is required")
        .min(6, "Username must be at least 6 characters")
        .max(20, "Username must not exceed 20 characters"),
      email: Yup.string()
        .required("Email is required")
        .email("Email is invalid"),
      phone: Yup.string().required("Phone is required"),
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
    <form onSubmit={formik.handleSubmit} className="py-0 w-full space-y-3 mt-7">
      <Input
        onChange={formik.handleChange}
        type="text"
        name="name"
        placeholder="Enter your name"
        value={formik.values.name}
      />
      {formik.touched.name && formik.errors.name && (
        <span className="text-alert text-xs">{formik.errors.name}</span>
      )}
      <Input
        name="email"
        placeholder="Enter your email"
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
        value={formik.values.phone}
        name="phone"
        placeholder="Enter your phone"
        type="tel"
      />
      {formik.touched.phone && formik.errors.phone && (
        <span className="text-alert text-xs p-0 m-0">
          {formik.errors.phone}
        </span>
      )}
      <TextArea
        onChange={formik.handleChange}
        value={formik.values.message}
        name="message"
        placeholder="Type something..."
      />
      {formik.touched.message && formik.errors.message && (
        <span className="text-alert text-xs p-0 m-0">
          {formik.errors.message}
        </span>
      )}
    </form>
  );
};
