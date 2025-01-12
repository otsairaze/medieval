import Navigation from "@/shared/shared/Navigation";
import React from "react";
import Image from "next/image";
import LocationCard from "./components/LocationCard";

export default function page() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-5">
        <Image src="/banner.png" width={1280} height={400} alt="banner" />
        <Navigation />
      </div>
      <LocationCard />
    </div>
  );
}
