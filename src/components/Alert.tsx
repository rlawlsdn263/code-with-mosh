import { ReactNode } from "react";

interface AlertInterface {
  children: ReactNode;
}

const Alert = ({ children }: AlertInterface) => {
  return (
    <div className="alert alert-primary" role="alert">
      {children}
    </div>
  );
};

export default Alert;
