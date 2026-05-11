import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * `cn` — merge conditional Tailwind class lists.
 *
 * Standard helper used across sketch components.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
