export interface InputProps {
	label: string
	name: string
	placeholder: string
	setValue: (value: string) => void
	value: string
}

export interface CheckboxProps {
	label: string
	name: string
	setValue: (value: boolean) => void
	value: boolean
}
