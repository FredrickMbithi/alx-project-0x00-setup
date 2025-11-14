import React from "react";
import { ButtonProps } from "@/interfaces";

const sizeClasses: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "px-3 py-1 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-5 py-3 text-lg",
};

const Button: React.FC<ButtonProps> = ({
  title,
  size = "md",
  shape = "rounded-md",
  className = "",
  onClick,
}) => {
  const base = "bg-blue-500 text-white hover:bg-blue-600 transition-colors";
  const cls = `${base} ${sizeClasses[size]} ${shape} ${className}`.trim();
  return (
    <button className={cls} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
