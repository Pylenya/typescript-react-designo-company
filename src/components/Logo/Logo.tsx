import React from "react";
import logoLight from "../../images/logo/logo-light.png";
import logoDark from "../../images/logo/logo-dark.png";

interface LogoProps {
  theme: "light" | "dark";
}

export const Logo: React.FC<LogoProps> = ({ theme }) => {
  return (
    <img
      src={theme === "light" ? logoLight : logoDark}
      alt="designo logo - home"
      width={202}
      height={27}
    />
  );
};
