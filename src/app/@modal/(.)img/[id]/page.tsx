import { Modal } from "./modal";
import FullPageImageView from "~/components/full-image-page";

export default async function ImagePage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;

  const idAsNumber = Number(id);

  return (
    <Modal>
      <FullPageImageView id={idAsNumber} />
    </Modal>
  );
}
