import { Hour } from "types/types";

export const revalidate = 10;

export type openingHoursProps = {
  hours: Hour[];
  color: "dark" | "light";
};

export const OpeningHours = ({ hours, color }: openingHoursProps) => {
  const textColor = color === "dark" ? "text-dark-blue" : "text-white";
  return (
    <>
      <p className={`${textColor} text-sm font-medium`}>Godziny otwarcia</p>
      {hours.map((hour: Hour) => (
        <p key={hour.id} className={`${textColor} flex text-xs`}>
          <span
            className={`${textColor} mr-2 text-xs font-medium`}
          >{`${hour.day}: `}</span>
          {!hour.from && !hour.to
            ? " zamknięte"
            : ` ${hour.from.slice(0, 5)} - ${hour.to.slice(0, 5)}`}
        </p>
      ))}
    </>
  );
};
