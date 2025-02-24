import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function parseMarkdown(text: string): string {
  // Convert headers (### Header)
  text = text.replace(/^### (.*$)/gm, "<h3>$1</h3>");

  // Convert bold text (**bold**)
  text = text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");

  // Convert line breaks
  text = text.replace(/\n\n/g, "<br><br>");

  return text;
}
