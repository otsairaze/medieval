import React from "react";

interface SelectorProps {
  items: any[];
  onSelect: (item: any) => void;
}
export default function Selector({ items, onSelect }: SelectorProps) {
  return (
    <ul>
      {items.map((item, index) => (
        <li
          key={index}
          className="cursor-pointer hover:bg-gray-800 p-2 rounded"
          onClick={() => onSelect(item)}
        >
          {typeof item === "string" ? item : item.title}{" "}
        </li>
      ))}
    </ul>
  );
}
