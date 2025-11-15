export interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface UserProps {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface Geo {
  lat: string;
  lng: string;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}
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
