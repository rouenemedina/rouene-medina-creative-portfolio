import "./Buttons.scss";
import React from "react";

interface ButtonProps {
    type: "button" | "submit" | "reset" | undefined;
    className: string;
    onClick ?: () => void;
    children: React.ReactNode;
}
function Buttons({ type, className, onClick, children }: ButtonProps) {
  return (
    <>
      <button type={type} className={className} onClick={onClick}>
        <h4>{children}</h4>
      </button>
    </>
  );
}

export default Buttons;
