import { IconButtonProps } from './buttonInterfaces'

export const IconButton = ({ alt, onClick, src, variant }: IconButtonProps) => {
	const style = variant === 'filled' && 'bg-indigo-600'

	return (
		<button
			className={`${style} self-end rounded-md border border-indigo-600`}
			onClick={onClick}
		>
			<img src={src} className="m-2 h-4" alt={alt} />
		</button>
	)
}
