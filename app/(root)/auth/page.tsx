"use client";

import { Input } from "@/shared/shared/Input";
import Typography from "@/shared/shared/Typography/Typography";
import React from "react";
import Selector from "./components/Selector";

export default function Page() {
  const [activeId, setActiveId] = React.useState(1);
  const [open, setOpen] = React.useState(false);

  const button = [
    {
      id: 1,
      button: "Пол",
      variants: ["Мужской", "Женский"],
    },
    {
      id: 2,
      button: "Класс",
      variants: ["Рыцарь", "Маг"],
    },
    {
      id: 3,
      button: "Раса",
      variants: ["Человек", "Ящер"],
    },
  ];

  const handleIdClick = (id: number) => {
    setActiveId(id);
    setOpen((prev) => !prev);
  };

  return (
    <div className="flex flex-col gap-5 p-4">
      <div className="flex items-center gap-4">
        <Typography variant="paragraph16_semibold" tag="h2">
          Имя
        </Typography>
        <Input placeholder="Введите имя" />
      </div>

      <div className="flex gap-4">
        <div className="flex flex-col gap-4">
          {button.map((item) => (
            <button
              key={item.id}
              className="flex items-center gap-4 cursor-pointer"
              onClick={() => handleIdClick(item.id)}
            >
              <Typography variant="paragraph16_semibold" tag="h2">
                {item.button}
              </Typography>
            </button>
          ))}
        </div>
        <div className="max-w-[700px] h-[800px] w-full bg-gray-700 flex flex-col justify-start items-center ">
          <Typography variant="paragraph16_semibold" tag="h2">
            text
          </Typography>
          {open && <Selector items={button[activeId - 1].variants} />}
        </div>
      </div>
    </div>
  );
}
