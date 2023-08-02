import { InputProps } from './inputInterfaces'

export const Input = ({ label, name, placeholder, setValue, value }: InputProps) => (
	<div>
		<label className="text-sm" htmlFor={name}>
			{label}
		</label>
		<input
			className="w-full rounded-md p-2 text-sm"
			id={name}
			name={name}
			onChange={(e) => setValue(e.target.value)}
			placeholder={placeholder}
			required
			type="text"
			value={value}
		/>
	</div>
)
