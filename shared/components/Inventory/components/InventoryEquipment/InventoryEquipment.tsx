import React from "react";

import styles from "./InventoryEquipment.module.css";
import InventoryCell from "../InventoryCell/InventoryCell";
import Typography from "@/shared/shared/Typography/Typography";

export default function InventoryEquipment() {
  return (
    <div className="flex flex-col gap-5">
      <div>
        <Typography variant="paragraph16_semibold" tag="h2">
          Скимитары наемника
        </Typography>
      </div>
      <div className="flex gap-6">
        <div className={styles.weapon}>
          <InventoryCell />
          <InventoryCell />
          <InventoryCell />
          <InventoryCell />
          <InventoryCell />
          <InventoryCell />
        </div>
        <div className={styles.ammunition}>
          <InventoryCell />
          <InventoryCell />
          <InventoryCell />
          <InventoryCell />
        </div>
      </div>
      <div className={styles.equipment}>
        <InventoryCell />
        <InventoryCell />
        <InventoryCell />
        <InventoryCell />
        <InventoryCell />
        <InventoryCell />
        <InventoryCell />
        <InventoryCell />
      </div>
      <div className={styles.consumables}>
        <InventoryCell />
        <InventoryCell />
        <InventoryCell />
        <InventoryCell />
        <InventoryCell />
        <InventoryCell />
        <InventoryCell />
        <InventoryCell />
        <InventoryCell />
        <InventoryCell />
      </div>
    </div>
  );
}
