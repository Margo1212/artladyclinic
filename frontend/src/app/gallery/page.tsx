import { ImageContainer } from "@lib/components/ImageContainer/ImageContainer";
import { Title } from "@lib/components/Title/Title";
import { getGallery } from "@lib/data/gallery";
import type { Metadata } from "next";
import Image from "next/image";
import { Circle } from "@lib/assets/svg/Circle";

export const metadata: Metadata = {
  title: "...",
  description: "...",
};

export default async function Page() {
  const galleryData = getGallery();

  const gallery = await Promise.resolve(galleryData);

  if (!gallery) return <h2>No Images Found</h2>;
  return (
    <div className="relative overflow-clip w-full h-full flex flex-col bg-white px-48 py-14 space-y-10">
      <div className="absolute -left-2 -top-2 z-0">
        <Circle />
      </div>

      <Title>{gallery.title}</Title>
      <div className="w-full h-full grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-x-12 gap-y-7 z-10">
        {gallery.photo.map((ph: any) => (
          <ImageContainer key={ph.id} photo={ph} />
        ))}
      </div>
    </div>
  );
}
