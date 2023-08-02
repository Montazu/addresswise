import { InputProps } from './inputInterfaces'

export const Textarea = ({ label, name, placeholder, setValue, value }: InputProps) => (
	<div>
		<label className="text-sm" htmlFor={name}>
			{label}
		</label>
		<textarea
			className="w-full rounded-md p-2 text-sm"
			id={name}
			name={name}
			onChange={(e) => setValue(e.target.value)}
			placeholder={placeholder}
			required
			rows={4}
			value={value}
		/>
	</div>
)
