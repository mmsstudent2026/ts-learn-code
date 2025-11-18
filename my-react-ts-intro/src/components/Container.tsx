import type { FC, ReactNode, HTMLAttributes } from "react";

type ContainerProps = {
  className?: string;
  children: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

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
