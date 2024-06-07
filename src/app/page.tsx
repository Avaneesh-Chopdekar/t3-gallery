import { getUserImages } from "~/server/queries";

import Image from "next/image";
import { SignedOut, SignedIn } from "@clerk/nextjs";
import Link from "next/link";

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
    <div className="flex flex-wrap gap-4 p-4">
      {[...images, ...images, ...images].map((image) => (
        <div key={image.id} className="flex w-48 flex-col">
          <Link href={`/img/${image.id}`}>
            <Image src={image.url} alt={image.name} width={192} height={108} />
          </Link>
          <p>{image.name}</p>
        </div>
      ))}
    </div>
  );
}
