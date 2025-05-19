import Banner from "@/components/Banner";
import Save from "@/components/Save";
import TicketBuyGuide from "@/components/TicketBuyGuide";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner />
      <Save />
      <TicketBuyGuide />
    </div>
  );
}
