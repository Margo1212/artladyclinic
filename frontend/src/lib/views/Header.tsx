import Image from "next/image";

export type HeaderProps = {
  homepage: any;
};

export const Header = ({ homepage }: HeaderProps) => {
  console.log(homepage);
  const images = homepage.header.images.data.map(
    (image: any) => image.attributes
  );

  const button = homepage.header.button;
  const sizes = [
    "col-span-3 row-span-5",
    "col-span-2 row-span-3 col-start-4",
    "col-span-2 row-span-2 col-start-4 row-start-4",
  ];
  return (
    <section className="flex justify-between w-full px-20 h-[75.28089887640449vh] bg-gradient-to-b from-dark-blue to-light-blue">
      <div className="w-2/4 flex flex-col space-y-10 justify-center ">
        <h1 className="text-white w-4/5 font-medium text-[2.9947916666666665vw] ">
          {homepage.header.title}
        </h1>
        <p className=" text-white text-left font-light text-[0.813rem] tracking-[8%]">
          {homepage.header.description}
        </p>
        <button className="bg-white rounded-md font-semibold text-dark-blue py-2 px-4 w-[14.438rem]">
          {button.title}
        </button>
      </div>

      <div className="w-[37.063rem] h-[35.313rem] mt-3 grid grid-cols-5 grid-rows-5 gap-5 overflow-clip">
        {images.map((image: any, idx: number) => (
          <div
            key={idx}
            className={`${sizes.filter(
              (size, i) => i === idx
            )}  object-cover w-full max-h-full`}
          >
            <Image
              className="w-full object-cover h-full"
              key={idx}
              src={image.url}
              alt={image.alternativeText}
              width={image.width}
              height={image.height}
            />
          </div>
        ))}
      </div>
    </section>
  );
};
