import Image from "next/image";
import { getImages } from "../lib/pocketbase";

export async function Gallery() {
  const images = await getImages();

  return (
    <div className="grid grid-cols-3 gap-1">
      {images.map((image) => (
        <div
          key={image.id}
          className={`relative ${
            image.orientation === "landscape" ? "col-span-2" : "col-span-1"
          }`}
        >
          <Image
            src={`YOUR_POCKETBASE_URL/api/files/${image.collectionId}/${image.id}/${image.image}`}
            alt="Gallery image"
            width={image.orientation === "landscape" ? 800 : 400}
            height={600}
            className="object-cover w-full h-full"
          />
        </div>
      ))}
    </div>
  );
}
