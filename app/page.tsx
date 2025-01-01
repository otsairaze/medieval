import Inventory from "@/shared/components/Inventory/Inventory";
import { Container } from "@/shared/shared/Container";
import Header from "@/shared/shared/Header";
import Navigation from "@/shared/shared/Navigation";
import Typography from "@/shared/shared/Typography/Typography";

import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col gap-4">
        <div>
          <Header />
          <Image src="/banner.png" width={1250} height={400} alt="banner" />
          <Navigation />
        </div>

        <div>
          <Typography variant="paragraph16_semibold" tag="h2">
            Оружие в правой руке 1
          </Typography>
          <Typography variant="paragraph16_semibold" tag="h2">
            Скимитары наемника
          </Typography>

          <Inventory />
        </div>
      </div>
    </Container>
  );
}
