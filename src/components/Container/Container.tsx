import clsx from "clsx";
import React from "react";
import styles from "./Container.module.css";

export default function Container({
  children,
  size = "default",
  className = "",
  withPadding = true, // Add a new prop to control the padding
}: {
  children: React.ReactNode;
  size?: "default" | "small";
  className?: string;
  withPadding?: boolean; // Add the prop to control padding
}) {
  return (
    <div
      className={clsx(styles.container, styles[size], className, {
        [styles.smallPadding]: withPadding, // Apply the custom padding class if "withPadding" is true
      })}
    >
      {children}
    </div>
  );
}
