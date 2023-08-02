export const SecondaryIconButton = ({ src }: { src: string }) => (
	<button className="rounded-md border border-current text-sm text-indigo-600">
		<img src={src} className="m-2 h-4" alt="logo" />
	</button>
)
