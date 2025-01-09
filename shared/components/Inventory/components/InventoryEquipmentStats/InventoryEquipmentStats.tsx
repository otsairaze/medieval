import Typography from "@/shared/shared/Typography/Typography";
import React from "react";
import styles from "./InventoryEquipmentStats.module.css";

export default function InventoryEquipmentStats() {
  return (
    <div>
      <Typography tag="span" variant="paragraph16_semibold">
        Скимитары наемника
      </Typography>

      <div className="flex flex-col gap-4 mt-5">
        <div className="flex flex-col">
          <Typography tag="span" variant="paragraph16_semibold">
            Изогнутый меч (парный)
          </Typography>
          <Typography tag="span" variant="paragraph16_semibold">
            Рубящий
          </Typography>
        </div>
        <div className="flex flex-col">
          <Typography tag="span" variant="paragraph16_semibold">
            Удар во вращении
          </Typography>
          <Typography tag="span" variant="paragraph16_semibold">
            Расход ОК 4( - / 12 )
          </Typography>
          <div className="flex gap-5">
            <Typography tag="span" variant="paragraph16_semibold">
              Вес 5.5
            </Typography>
          </div>
        </div>
        <div className="flex flex-col">
          <Typography tag="span" variant="paragraph16_semibold">
            Сила атаки
          </Typography>
          <Typography tag="span" variant="paragraph16_semibold">
            Физическ. 99+ 14
          </Typography>
          <Typography tag="span" variant="paragraph16_semibold">
            Тьма 0
          </Typography>
          <Typography tag="span" variant="paragraph16_semibold">
            Огонь 0
          </Typography>
          <Typography tag="span" variant="paragraph16_semibold">
            Критическ. 0
          </Typography>
        </div>
      </div>
    </div>
  );
}
