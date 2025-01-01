import React from "react";
import Typography from "./Typography/Typography";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <>
      <div className="flex justify-between items-center py-6">
        <Typography variant="title20_bold" tag="h2">
          MedievalSouls
        </Typography>
        <Typography variant="title20_bold" tag="h2">
          Вход
        </Typography>
      </div>
    </>
  );
}
