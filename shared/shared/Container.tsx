import clsx from "clsx";
import React, { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export const Container: React.FC<ContainerProps> = ({
  children,
  className,
}) => {
  return (
    <div className={clsx("container mx-auto max-w-[1250px]", className)}>
      {children}
    </div>
  );
};
