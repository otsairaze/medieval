import React from "react";
import Typography from "./Typography/Typography";
import Navigation from "./Navigation";
import Link from "next/link";
import { LogOut } from "lucide-react";

export default function Header() {
  return (
    <>
      <div className="flex justify-between items-center py-6">
        <Link href={"/"}>
          <Typography variant="title20_bold" tag="h2">
            MedievalSouls
          </Typography>
        </Link>
        <Link className="flex items-center gap-2" href={"/auth"}>
          <Typography variant="title20_bold" tag="h2">
            Вход
          </Typography>
          <LogOut />
        </Link>
      </div>
    </>
  );
}
