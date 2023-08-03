import { ButtonProps } from './buttonInterfaces'

export const Button = ({ label, type, variant }: ButtonProps) => {
	const style =
		variant === 'filled' ? 'bg-indigo-600 text-white' : 'border-current text-indigo-600'

	return (
		<button className={`${style} self-end rounded-md border px-8 py-3 text-sm`} type={type}>
			{label}
		</button>
	)
}
