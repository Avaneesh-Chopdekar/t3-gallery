import { getImage } from "~/server/queries";
import Image from "next/image";

export default async function FullPageImageView(props: { id: number }) {
  const { id } = props;
  if (Number.isNaN(id)) throw new Error("Invalid image id");

  const image = await getImage(id);

  return <Image src={image.url} alt={image.name} width={384} height={384} />;
}
