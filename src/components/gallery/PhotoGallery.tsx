import { Photo } from "@/types";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { PhotoGrid } from "./PhotoGrid";

interface PhotoGalleryProps {
  photos: Photo[];
}

export const PhotoGallery: React.FC<PhotoGalleryProps> = ({ photos }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t } = useTranslation("common", { useSuspense: false });

  const handlePhotoClick = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const slides = photos.map((photo) => ({
    src: photo.src,
    alt: photo.alt,
  }));

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-serif text-center mb-12">
          {t("gallery.title")}
        </h2>
        <PhotoGrid photos={photos} onPhotoClick={handlePhotoClick} />
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          index={currentIndex}
          slides={slides}
        />
      </div>
    </section>
  );
};
