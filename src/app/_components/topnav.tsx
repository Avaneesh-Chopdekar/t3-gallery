import UploadButton from "./simple-upload-button";

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function TopNav() {
  return (
    <nav className="flex w-full items-center justify-between border-b p-4 text-xl font-semibold">
      <div>Gallery</div>

      <div>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <div className="flex gap-8">
            <UploadButton />
            <UserButton />
          </div>
        </SignedIn>
      </div>
    </nav>
  );
}
