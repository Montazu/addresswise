interface ButtonProps {
	label: string
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
	type?: 'submit'
}

export const PrimaryButton = ({ label, onClick, type }: ButtonProps) => (
	<button
		className="self-end rounded-md bg-indigo-600 px-8 py-3 text-sm text-white"
		onClick={(e) => onClick && onClick(e)}
		type={type}
	>
		{label}
	</button>
)
