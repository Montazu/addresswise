import { InputProps } from './inputInterfaces'

export const CheckboxInput = ({ children, name }: InputProps) => (
	<div>
		<input className="p-2 text-sm" id={name} name={name} type="checkbox" />
		<label className="ml-2 text-sm" htmlFor={name}>
			{children}
		</label>
	</div>
)
