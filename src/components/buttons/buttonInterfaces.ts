type variant = 'filled' | 'outlined'

export interface ButtonProps {
	label: string
	type?: 'submit'
	variant: variant
}

export interface IconButtonProps {
	alt: string
	onClick?: () => void
	src: string
	variant: variant
}
