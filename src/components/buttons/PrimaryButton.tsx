import { ReactNode } from 'react'

export const PrimaryButton = ({ children }: { children: ReactNode }) => (
	<button className="mt-1 self-end rounded-md bg-indigo-600 px-8 py-3 text-sm text-white">
		{children}
	</button>
)
