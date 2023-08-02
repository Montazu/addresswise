export const PrimaryIconButton = ({ src }: { src: string }) => (
	<button className="rounded-md border border-current bg-indigo-600  text-indigo-600">
		<img src={src} className="m-2 h-4" alt="logo" />
	</button>
)
