import { useState } from 'react'
import { MainLayout } from './layouts/MainLayout'

type id = number
type invoiceNumbers = string
type senderAddress = string
type recipientAddress = string

interface shipment {
	id: id
	invoiceNumbers: invoiceNumbers
	senderAddress: senderAddress
	recipientAddress: recipientAddress
}

export const App = () => {
	const [shipments, setShipments] = useState<shipment[]>([])

	return (
		<MainLayout>
			{shipments.length ? (
				<p>Wysyłki</p>
			) : (
				<p className="flex h-full select-none items-center justify-center text-xl text-gray-500">
					Brak wysyłek
				</p>
			)}
		</MainLayout>
	)
}
