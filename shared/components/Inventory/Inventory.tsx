import React from "react";
import InventoryEquipment from "./components/InventoryEquipment/InventoryEquipment";
import InventoryStats from "./components/InventoryStats/InventoryStats";
import InventoryEquipmentStats from "./components/InventoryEquipmentStats/InventoryEquipmentStats";
import Typography from "@/shared/shared/Typography/Typography";

export default function Inventory() {
  return (
    <>
      <div>
        <Typography variant="paragraph16_semibold" tag="h2">
          Оружие в правой руке 1
        </Typography>
      </div>
      <div className="flex justify-between">
        <InventoryEquipment />
        <InventoryEquipmentStats />
        <InventoryStats />
      </div>
    </>
  );
}
