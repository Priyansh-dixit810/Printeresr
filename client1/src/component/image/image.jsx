import { IKImage } from "imagekitio-react";

function Image({ path, alt, w, h,className, src }) {
  return (
    <IKImage
      urlEndpoint={import.meta.env.VITE_URL_END_POINT}
      path={path}
      src={src}
      className={className}
      transformation={[{ height: h,width: w }]}
      loading="lazy"
      alt={alt}
      lqip={{active: true, quality: 20}}
    ></IKImage>
  );
}

export default Image;
