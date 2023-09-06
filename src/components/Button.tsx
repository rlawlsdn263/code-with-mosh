import { ReactNode } from "react";

interface ButtonInterface {
  mode?: "primary" | "secondary" | "danger";
  children: ReactNode;
  onClick: () => void;
}

const Button = ({ mode = "primary", children, onClick }: ButtonInterface) => {
  return (
    <button type="button" className={`btn btn-${mode}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
