import { InputProps } from './inputInterfaces'

export const PrimaryInput = ({ children, name }: InputProps) => (
	<div>
		<label className="text-sm" htmlFor={name}>
			{children}
		</label>
		<input
			className="w-full p-2 text-sm"
			id={name}
			name={name}
			required
			type="text"
		/>
	</div>
)
