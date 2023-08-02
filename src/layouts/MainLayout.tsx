import { ReactNode } from 'react'
import { Form } from '../containers/Form'

export const MainLayout = ({ children }: { children: ReactNode }) => (
	<div className="grid h-full grid-rows-[auto_1fr] gap-4 lg:grid-cols-2 lg:grid-rows-1">
		<div className="h-auto rounded-lg bg-gray-200 p-4">
			<Form />
		</div>
		<div className="h-full overflow-hidden rounded-lg bg-gray-200 p-4">{children}</div>
	</div>
)
