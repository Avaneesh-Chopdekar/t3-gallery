import { getImage } from "~/server/queries";
import Image from "next/image";

export default async function FullPageImageView(props: { id: number }) {
  const { id } = props;
  if (Number.isNaN(id)) throw new Error("Invalid image id");

  const image = await getImage(id);

  return (
    <div className="flex h-full w-full min-w-0">
      <div className="flex flex-shrink items-center justify-center">
        <Image
          src={image.url}
          alt={image.name}
          width={384}
          height={384}
          className="object-contain"
        />
      </div>
      <div className="flex w-48 flex-shrink-0 flex-col border-l">
        <p className="text-xl font-bold">{image.name}</p>
      </div>
    </div>
  );
}
