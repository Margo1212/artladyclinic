import { ImageContainer } from "@lib/components/ImageContainer/ImageContainer";
import { Title } from "@lib/components/Title/Title";
import { getGallery } from "@lib/data/gallery";
import type { Metadata } from "next";
import { GalleryPageImage } from "@lib/assets/svg/GalleryPageImage";
export const revalidate = 10;

export const metadata: Metadata = {
  title: "Art Lady Clinic | Galeria",
  description:
    "Przeglądaj naszą galerię, aby zobaczyć rezultaty naszej pracy i atmosferę w naszym salonie. Odkryj, jak dbamy o detale, tworząc unikalne doświadczenia dla naszych klientów. Pozwól zdjęciom mówić więcej niż słowa.",
};

export default async function Page() {
  const galleryData = getGallery();

  const gallery = await Promise.resolve(galleryData).catch((err) =>
    console.error(err)
  );
  console.log(gallery.photo);
  return (
    <div className="relative overflow-clip w-full h-full px-3 py-4 flex flex-col bg-white laptop:px-48 laptop:py-14">
      <GalleryPageImage position="up" />
      <GalleryPageImage position="down" />
      <Title>Galeria</Title>
      {gallery.photo ? (
        <div className="w-full h-full mt-10 grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-x-16 gap-y-16 z-10">
          {gallery?.photo.map((ph: any) => (
            <ImageContainer key={ph.id} photo={ph} />
          ))}
        </div>
      ) : (
        <h2>No images founded...</h2>
      )}
    </div>
  );
}
