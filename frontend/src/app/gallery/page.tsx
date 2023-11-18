import { ImageContainer } from "@lib/components/ImageContainer/ImageContainer";
import { Title } from "@lib/components/Title/Title";
import { getGallery } from "@lib/data/gallery";
import type { Metadata } from "next";
import { GalleryPageImage } from "@lib/assets/svg/GalleryPageImage";

export const metadata: Metadata = {
  title: "Art Lady Clinic | Galeria",
  description:
    "Przeglądaj naszą galerię, aby zobaczyć rezultaty naszej pracy i atmosferę w naszym salonie. Odkryj, jak dbamy o detale, tworząc unikalne doświadczenia dla naszych klientów. Pozwól zdjęciom mówić więcej niż słowa.",
};

export default async function Page() {
  const galleryData = getGallery();

  const gallery = await Promise.resolve(galleryData);

  if (!gallery) return <h2>No Images Found</h2>;
  return (
    <div className="relative overflow-clip w-full h-full px-3 py-4 flex flex-col bg-white laptop:px-48 laptop:py-14 space-y-10">
      <GalleryPageImage position="up" />
      <GalleryPageImage position="down" />
      <Title>{gallery.title}</Title>
      <div className="w-full h-full grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-x-12 gap-y-7 z-10">
        {gallery.photo.map((ph: any) => (
          <ImageContainer key={ph.id} photo={ph} />
        ))}
      </div>
    </div>
  );
}
