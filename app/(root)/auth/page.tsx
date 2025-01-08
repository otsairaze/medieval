"use client";

import { Input } from "@/shared/shared/Input";
import Typography from "@/shared/shared/Typography/Typography";
import React from "react";
import Selector from "./components/Selector";

export default function Page() {
  const [activeId, setActiveId] = React.useState(1);
  const [selectedDescription, setSelectedDescription] = React.useState(null);
  const [open, setOpen] = React.useState(false);

  const button = [
    {
      id: 1,
      button: "Пол",
      variants: ["Мужской", "Женский"],
    },
    {
      id: 2,
      button: "Возраст",
      variants: ["Юный", "Молодой", "Средний", "Старый"],
    },
    {
      id: 3,
      button: "Класс",
      variants: [
        "Рыцарь",
        "Наемник",
        "Воин",
        "Глашатай",
        "Вор",
        "Убийца",
        "Чародей",
        "Пиромант",
        "Клирик",
        "Нищий",
      ],
    },
    {
      id: 4,
      button: "Погребальный дар",
      variants: [
        {
          id: 1,
          title: "Неприкаянная душа",
          description:
            "Неприкаянная душа, принадлежавшая тому, кто спал рядом с вами. Испоьзуйте, чтобы получить много душ",
        },
        {
          id: 2,
          title: "Неприкаянная душа",
          description: "ыы",
        },
      ],
    },
    {
      id: 5,
      button: "Телосложение",
      variants: ["Нормальное", "Среднее", "Сильное"],
    },
  ];

  const handleIdClick = (id: number) => {
    setActiveId(id);
    setOpen((prev) => !prev);
  };

  const handleSelect = (item) => {
    if (typeof item === "string") {
      setSelectedDescription(item);
    } else if (item.description) {
      setSelectedDescription(item.description);
    }
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
            {selectedDescription || "Выберите элемент для отображения описания"}{" "}
          </Typography>
          {open && (
            <Selector
              onSelect={handleSelect}
              items={button[activeId - 1].variants}
            />
          )}
        </div>
      </div>
    </div>
  );
}
