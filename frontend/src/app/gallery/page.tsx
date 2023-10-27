import { Title } from "@lib/components/Title/Title";
import { getGallery } from "@lib/data/gallery";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "...",
  description: "...",
};

export default async function Page() {
  const galleryData = getGallery();

  const gallery = await Promise.resolve(galleryData);
  return (
    <div className="w-full h-full flex flex-col bg-white px-36 py-14 space-y-10">
      <Title>{gallery.title}</Title>
      <div className="w-full h-full flex">
        {gallery.photo.map((ph: any) => (
          <div className="w-[300px] h-[400px] " key={ph.image.id}>
            <Image
              className="w-full object-cover h-full"
              src={ph.image.data?.attributes.url}
              alt={ph.image.data?.attributes.alternativeText}
              width={ph.image.data?.attributes.width}
              height={ph.image.data?.attributes.height}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
