import Image from "next/image";


export default function Home() {
  return (
    <div>
      <Image
        src="/e-ticket.png"
        alt="Next.js logo"
        width={180}
        height={50}
        priority
      />
    </div>
  );
}
