import type { FC } from "react";
import type { ContainerProps } from "../types/PropTypes";

const Container: FC<ContainerProps> = ({
  children,
  className = "",
  ...rest
}) => {
  return (
    <div className={`container mx-auto ${className}`} {...rest}>
      {children}
    </div>
  );
};

export default Container;
