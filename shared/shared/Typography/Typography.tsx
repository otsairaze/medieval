import clsx from "clsx";
import React from "react";
import styles from "./Typography.module.css";

type tag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "p" | "li";

type TypographyVariant =
  | "title20_bold"
  | "paragraph16_regular"
  | "paragraph20_medium"
  | "paragraph16_semibold";

interface TypographyProps {
  children: React.ReactNode;
  variant: TypographyVariant;
  tag: tag;
  className?: string;
}

export default function Typography({
  children,
  tag,
  variant,
  className,
}: TypographyProps) {
  const Component = tag;

  return (
    <Component className={clsx(styles[variant], className)}>
      {children}
    </Component>
  );
}
