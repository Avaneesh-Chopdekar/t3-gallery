import { getImage } from "~/server/queries";
import Image from "next/image";

export default async function ImagePage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;

  const idAsNumber = Number(id);
  if (Number.isNaN(idAsNumber)) throw new Error("Invalid image ID");

  const image = await getImage(idAsNumber);

  return (
    <div>
      <Image src={image.url} alt={image.name} width={384} height={384} />
    </div>
  );
}
