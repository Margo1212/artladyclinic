import Image from "next/image";

export type ImageContainerProps = {
  photo: any;
};

export const ImageContainer = ({ photo }: ImageContainerProps) => {
  return (
    <div
      data-aos="zoom-in"
      className="w-full h-full shadow-sm"
      key={photo.image.id}
    >
      <Image
        className="w-full object-cover h-full"
        src={photo.image.data?.attributes.url}
        alt={photo.image.data?.attributes.alternativeText}
        width={photo.image.data?.attributes.width}
        height={photo.image.data?.attributes.height}
      />
    </div>
  );
};
