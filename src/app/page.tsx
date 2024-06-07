import { getUserImages } from "~/server/queries";

import Image from "next/image";
import { SignedOut, SignedIn } from "@clerk/nextjs";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  return (
    <main>
      <SignedOut>
        <div className="h-full w-full text-center text-2xl">
          Please sign in above
        </div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}

export async function Images() {
  const images = await getUserImages();

  return (
    <div className="flex flex-wrap gap-4">
      {images.map((image) => (
        <div key={image.id} className="flex w-48 flex-col">
          <Image src={image.url} alt={image.name} width={192} height={108} />
          <p>{image.name}</p>
        </div>
      ))}
    </div>
  );
}
