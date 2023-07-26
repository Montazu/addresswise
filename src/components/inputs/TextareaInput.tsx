import { InputProps } from './inputInterfaces'

export const TextareaInput = ({ children, name }: InputProps) => (
	<div>
		<label className="text-sm" htmlFor={name}>
			{children}
		</label>
		<textarea
			className="w-full p-2 text-sm"
			id={name}
			name={name}
			required
			rows={4}
		/>
	</div>
)
