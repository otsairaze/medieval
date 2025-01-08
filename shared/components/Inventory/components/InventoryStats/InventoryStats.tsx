import Typography from "@/shared/shared/Typography/Typography";
import React from "react";

export default function InventoryStats() {
  const arr = [
    {
      id: 1,
      title: "Уровень",
      value: "8",
    },
    {
      id: 2,
      title: "Жизненная Сила",
      value: "3",
    },
    {
      id: 3,
      title: "Ученость",
      value: "1",
    },
    {
      id: 4,
      title: "Стойкость",
      value: "5",
    },
    {
      id: 5,
      title: "Физическая мощь",
      value: "7",
    },
    {
      id: 6,
      title: "Сила",
      value: "3",
    },
    {
      id: 7,
      title: "Ловкость",
      value: "1",
    },
    {
      id: 8,
      title: "Интеллект",
      value: "0",
    },
    {
      id: 9,
      title: "Вера",
      value: "20",
    },
    {
      id: 10,
      title: "Удача",
      value: "10",
    },
    {
      id: 11,
      title: "ОЗ",
      value: "100",
    },
    {
      id: 12,
      title: "ОК",
      value: "8",
    },
    {
      id: 13,
      title: "Выносливость",
      value: "90",
    },
  ];
  return (
    <div>
      <ul>
        {arr.map((item) => (
          <Typography
            tag="li"
            variant="paragraph16_semibold"
            className="flex justify-between"
            key={item.id}
          >
            <Typography variant="paragraph16_semibold" tag="span">
              {item.title}
            </Typography>
            <Typography variant="paragraph16_semibold" tag="span">
              {item.value}
            </Typography>
          </Typography>
        ))}
      </ul>
    </div>
  );
}
