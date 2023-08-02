import { CheckboxProps } from './inputInterfaces'

export const Checkbox = ({ label, name, setValue, value }: CheckboxProps) => (
	<div>
		<input
			className="p-2 text-sm"
			id={name}
			name={name}
			onChange={() => setValue(!value)}
			checked={value}
			type="checkbox"
		/>
		<label className="ml-2 text-sm" htmlFor={name}>
			{label}
		</label>
	</div>
)