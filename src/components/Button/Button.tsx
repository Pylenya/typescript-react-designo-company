import React from "react";
import "./button.scss";

interface ButtonProps {
  backgroundColor: "white" | "pear";
  children: string;
}

export const Button: React.FC<ButtonProps> = ({
  backgroundColor,
  children,
}) => {
  return (
    <button
      className={
        backgroundColor === "white"
          ? "button button--white"
          : "button button--pear"
      }
    >
      {children}
    </button>
  );
};
