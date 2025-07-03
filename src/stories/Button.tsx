import React from 'react';

type Props = {
	title: string;
	primary?: boolean;
	type?: 'button' | 'reset' | 'submit';
	className?: string;
	onClick?: (e: React.MouseEvent) => void;
};

export default function Button({
	primary,
	title,
	className,
	onClick,
	type,
}: Props) {
	const baseButtonStyle: string = `px-6 py-3 font-medium text-white transition shadow bg-primary hover:bg-blue-700 rounded-2xl hover:opacity-70 ${primary}`;
	return (
		<button
			onClick={onClick}
			type={type}
			className={`${baseButtonStyle} ${className}`}
		>
			{title}
		</button>
	);
}
