// src/lib/utils.ts

// Utility for conditional classNames
export function cn(...classes: (string | false | null | undefined)[]): string {
	return classes.filter(Boolean).join(' ');
}

// Utility to format numbers as currency (default ZAR)
export function formatPrice(amount: number, currency = 'ZAR'): string {
	return new Intl.NumberFormat('en-ZA', {
		style: 'currency',
		currency,
	}).format(amount);
}

// Utility to generate URL-friendly slugs from strings
export function slugify(text: string): string {
	return text
		.toLowerCase()
		.trim()
		.replace(/[\s\W-]+/g, '-')
		.replace(/^-+|-+$/g, ''); // Remove starting/ending dashes
}

// Utility to round prices for markup
export function applyMarkup(base: number, markup = 0.15): number {
	return Math.round(base * (1 + markup));
}
