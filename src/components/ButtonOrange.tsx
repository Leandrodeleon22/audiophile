import React from "react";

interface ButtonOrangeProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const ButtonOrange: React.FC<ButtonOrangeProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <button
      className={`bg-[var(--orange-main)] font-bold tracking-[1px] text-[1.3rem] px-[3rem] w-[16rem] py-[1.425rem] uppercase ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default ButtonOrange;
