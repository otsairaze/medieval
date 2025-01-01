import Image from "next/image";
import React from "react";
import styles from "./InventoryCell.module.css";

export default function InventoryCell() {
  return (
    <div className={styles.inventorycell}>
      <Image src={"/weapon.png"} width={105} height={105} alt="cell" />
    </div>
  );
}
