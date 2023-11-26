"use client";
import Image from "next/image";

export type ImageContainerProps = {
  photo: any;
};

export const ImageContainer = ({ photo }: ImageContainerProps) => {
  return (
    <div data-aos="zoom-in" className="w-full h-96" key={photo.image.id}>
      {photo.image.data?.attributes.ext === ".mp4" ? (
        <div className="shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
          <video
            suppressHydrationWarning
            src={photo.image.data?.attributes.url}
            controls={true}
            className="object-cover h-96 w-full "
            controlsList="nofullscreen"
          />
        </div>
      ) : (
        <Image
          className="w-full object-cover h-full shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
          src={photo.image.data?.attributes.url}
          alt={photo.image.data?.attributes.alternativeText}
          width={photo.image.data?.attributes.width}
          height={photo.image.data?.attributes.height}
        />
      )}
    </div>
  );
};
