import { Container } from "@/shared/shared/Container";
import Image from "next/image";
import Navigation from "@/shared/shared/Navigation";
import Typography from "@/shared/shared/Typography/Typography";
import Inventory from "@/shared/components/Inventory/Inventory";

export default function Page() {
  return (
    <Container>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-5">
          <Image src="/banner.png" width={1250} height={400} alt="banner" />
          <Navigation />
        </div>

        <div>
          <Inventory />
        </div>
      </div>
    </Container>
  );
}
