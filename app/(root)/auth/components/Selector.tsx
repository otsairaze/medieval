import React from "react";

interface SelectorProps {
  className?: string;
  items: string[];
}

export default function Selector({ items, className }: SelectorProps) {
  return (
    <>
      <ul className="border-b border-white">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}
