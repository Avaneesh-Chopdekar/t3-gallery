import Image from "next/image";

const mockUrls = [
  "https://utfs.io/f/2c9eac89-d92e-4018-9877-70a1b1ca3ae2-jlyrsq.png",
  "https://utfs.io/f/13da7a29-997e-41b1-9942-74ccd3d6557e-ujplu0.png",
  "https://utfs.io/f/6713c5d0-c81d-4fcf-becd-eec8259ba68d-uxe24q.png",
  "https://utfs.io/f/5066cb39-8169-40d1-9557-cee6b48ca478-uf7x9h.jpg",
];

const mockImages = mockUrls.map((url, idx) => ({ id: idx + 1, url }));

export default function HomePage() {
  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {mockImages.map((image) => (
          <Image
            key={image.id}
            src={image.url}
            alt="Image"
            width={192}
            height={108}
          />
        ))}
      </div>
      Hello (gallery in progress)
    </main>
  );
}
