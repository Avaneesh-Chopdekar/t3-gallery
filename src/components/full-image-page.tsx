import { deleteImage, getImage } from "~/server/queries";
import Image from "next/image";
import { clerkClient } from "@clerk/nextjs/server";
import { Button } from "./ui/button";

export default async function FullPageImageView(props: { id: number }) {
  const { id } = props;
  if (Number.isNaN(id)) throw new Error("Invalid image id");

  const image = await getImage(id);

  const uploaderInfo = await clerkClient.users.getUser(image.userId);

  return (
    <div className="flex h-full w-full min-w-0">
      <div className="flex w-1/2 items-center justify-center">
        <Image
          src={image.url}
          alt={image.name}
          width={384}
          height={384}
          className="h-full w-full object-contain"
        />
      </div>
      <div className="flex w-1/2 flex-col gap-2 border-l">
        <p className="border-b p-2 text-center text-lg">{image.name}</p>

        <div className="flex flex-col text-center">
          <span>Uploaded by</span>
          <span>{uploaderInfo.fullName}</span>
        </div>

        <div className="flex flex-col text-center">
          <span>Created on</span>
          <span>{new Date(image.createdAt).toLocaleDateString("en-IN")}</span>
        </div>

        <div className="flex flex-col text-center">
          <form
            action={async (formData) => {
              "use server";
              await deleteImage(id);
            }}
          >
            <Button type="submit" variant="destructive">
              Delete
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
