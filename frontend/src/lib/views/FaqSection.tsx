import { HeaderProps } from "./Header";
import { Title } from "@lib/components/Title/Title";
import { FaqSectionImage } from "@lib/assets/svg/FaqSectionImage";
import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from "@mui/material";
import { Question } from "types/types";
import AddIcon from "@mui/icons-material/Add";

export const FaqSection = ({ homepage }: HeaderProps) => {
  return (
    <section className="relative flex flex-col laptop:py-14 items-center mb-10 px-3">
      <FaqSectionImage position="up" />
      <FaqSectionImage position="down" />
      <Title>{homepage.faq.title}</Title>
      <div className=" w-full desktop:w-[800px] mt-14">
        {homepage.faq.questions.map((question: Question) => (
          <Accordion
            key={question.id}
            sx={{
              marginBottom: "10px",
              backgroundColor: "#F4F4F4",
              borderTop: "solid 1px #C4C4C4",
              borderBottom: "solid 1px #C4C4C4",
              boxShadow: "none",
            }}
          >
            <AccordionSummary
              expandIcon={
                <AddIcon sx={{ color: "#0E0045", marginLeft: "2px" }} />
              }
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>{question.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                sx={{
                  paddingLeft: "20px",
                  borderLeft: "solid 4px #0E0045",
                  fontSize: "12px",
                }}
              >
                {question.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </section>
  );
};
