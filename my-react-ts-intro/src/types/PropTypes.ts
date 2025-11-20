import type { ButtonHTMLAttributes, HTMLAttributes, ReactElement, ReactNode } from "react";

export type ButtonVariant = "plane" | "solid" | "outline";

export type ButtonProps = {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export type ContainerProps = {
  className?: string;
  children: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

export type TextCardPropType = {
  heading: string;
  description: string;
  icon: ReactElement;
};
