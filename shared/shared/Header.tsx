import React from "react";
import Typography from "./Typography/Typography";
import Navigation from "./Navigation";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <div className="flex justify-between items-center py-6">
        <Link href={"/"}>
          <Typography variant="title20_bold" tag="h2">
            MedievalSouls
          </Typography>
        </Link>
        <Typography variant="title20_bold" tag="h2">
          Вход
        </Typography>
      </div>
    </>
  );
}
