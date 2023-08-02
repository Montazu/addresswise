interface ButtonProps {
	label: string
	onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
	type?: 'submit'
}

export const SecondaryButton = ({ label, onClick, type }: ButtonProps) => (
	<button
		className="self-end rounded-md border border-current px-8 py-3 text-sm text-indigo-600"
		onClick={(e) => onClick(e)}
		type={type}
	>
		{label}
	</button>
)
