export interface PillProps {
	title: string;
}

export type ButtonSize = "sm" | "md" | "lg";
export type ButtonShape = "rounded-sm" | "rounded-md" | "rounded-full";

export interface ButtonProps {
	title: string;
	size?: ButtonSize;
	shape?: ButtonShape;
	className?: string;
	onClick?: () => void;
}
