import { Question } from "@lib/types/types";
import AddIcon from "@mui/icons-material/Add";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { FaqSectionImage } from "@ui/assets/svg/FaqSectionImage";
import { Title } from "@ui/components/Title/Title";
import { HeaderProps } from "./Header";

export const FaqSection = ({ homepage }: HeaderProps) => {
  return (
    <section className="relative flex flex-col laptop:py-14 items-center justify-center mb-10 px-3 gap-y-5">
      <FaqSectionImage position="up" />
      <FaqSectionImage position="down" />
      <Title>Najczęściej zadawane pytania</Title>
      {homepage.faq.questions ? (
        <div className=" w-full desktop:w-[800px] mt-8">
          {homepage.faq.questions.map((question: Question) => (
            <Accordion
              key={question.id}
              sx={{
                marginBottom: "25px",
                backgroundColor: "#F4F4F4",
                borderTop: "solid 1px #C4C4C4",
                borderBottom: "solid 1px #C4C4C4",
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
                    fontSize: "14px",
                  }}
                >
                  {question.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      ) : (
        <h2>No questions founded...</h2>
      )}
    </section>
  );
};
