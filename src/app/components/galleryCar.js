import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

const Gallery = async ({ id, images }) => {
  const onInit = () => {
    console.log({ images });
  };
  return (
    <LightGallery
      onInit={onInit}
      speed={500}
      plugins={[lgZoom]}
      preload={2}
      galleryId={id}
    >
      <a
        href={images.hero.sizes.large}
        className="bg-cover bg-center w-auto h-64 block rouded-lg rounded-t"
        style={{ backgroundImage: `url(${images.hero.sizes.medium})` }}
      ></a>
      {images.hero_1 && <a href={images.hero_1.sizes.large}></a>}
      {images.hero_2 && <a href={images.hero_2.sizes.large}></a>}
      {images.hero_3 && <a href={images.hero_3.sizes.large}></a>}
      {images.hero_4 && <a href={images.hero_4.sizes.large}></a>}
      {images.hero_5 && <a href={images.hero_5.sizes.large}></a>}
      {images.hero_6 && <a href={images.hero_6.sizes.large}></a>}
      {images.hero_7 && <a href={images.hero_7.sizes.large}></a>}
      {images.hero_8 && <a href={images.hero_8.sizes.large}></a>}
      {images.hero_9 && <a href={images.hero_9.sizes.large}></a>}
      {images.hero_10 && <a href={images.hero_10.sizes.large}></a>}
    </LightGallery>
  );
};

export default Gallery;
