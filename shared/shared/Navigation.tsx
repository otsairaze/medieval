"use client";

import React from "react";
import Typography from "./Typography/Typography";
import { Menu } from "lucide-react";
import Link from "next/link";

export default function Navigation() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen((prev) => !prev);

  const arr = [
    {
      id: 1,
      title: "Инвентарь",
      url: "/inventory",
    },

    {
      id: 2,
      title: "Аукцион",
      url: "/auction",
    },

    {
      id: 3,
      title: "Магазин",
      url: "/shop",
    },

    {
      id: 4,
      title: "Дуэли",
      url: "/duels",
    },

    {
      id: 5,
      title: "Налёт",
      url: "/flight",
    },
  ];

  //"Инвентарь", "Аукцион", "Магазин", "Дуэли", "Налёт"
  return (
    <>
      <div className="flex gap-4 items-center">
        <Menu
          onClick={handleOpen}
          className="cursor-pointer"
          width={24}
          height={24}
        />
        {open && (
          <ul className="flex gap-4">
            {arr.map((item, index) => (
              <Link key={index} href={item.url}>
                <Typography variant="paragraph16_regular" tag="li" key={index}>
                  {item.title}
                </Typography>
              </Link>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
