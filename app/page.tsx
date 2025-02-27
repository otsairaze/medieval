import Inventory from "@/shared/components/Inventory/Inventory";
import { Container } from "@/shared/shared/Container";
import Header from "@/shared/shared/Header";
import Navigation from "@/shared/shared/Navigation";
import Typography from "@/shared/shared/Typography/Typography";

import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <div className="flex">
        <div className="flex flex-col gap-5">
          <Image src="/banner.png" width={1250} height={400} alt="banner" />
          <Navigation />
        </div>
      </div>
    </Container>
  );
}
