import { useState } from 'react'
import { Form } from '@containers/Form'
import { List } from '@containers/List'
import { Shipment, ShipmentContext } from '@contexts/ShipmentContext'

export const App = () => {
	const savedSenderAddress = localStorage.getItem('senderAddress')
	const [shipments, setShipments] = useState<Shipment[]>([])
	const [formData, setFormData] = useState({
		invoiceNumbers: '',
		senderAddress: savedSenderAddress || '',
		recipientAddress: '',
	})

	return (
		<ShipmentContext.Provider value={{ shipments, setShipments, formData, setFormData }}>
			<div className="grid h-full grid-rows-[auto_1fr] gap-4 lg:grid-cols-2 lg:grid-rows-1">
				<div className="h-auto rounded-lg bg-gray-200 p-4">
					<Form />
				</div>
				<div className="rounded-lg bg-gray-200 p-4">
					{shipments.length ? (
						<List />
					) : (
						<p className="flex h-full select-none items-center justify-center text-xl text-gray-500">
							Brak wysyłek
						</p>
					)}
				</div>
			</div>
		</ShipmentContext.Provider>
	)
}
