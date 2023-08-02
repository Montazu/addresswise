import { createContext } from 'react'

export type invoiceNumbers = string
export type senderAddress = string
export type recipientAddress = string

export interface Shipment {
	id: number
	invoiceNumbers: invoiceNumbers
	senderAddress: senderAddress
	recipientAddress: recipientAddress
}

interface ShipmentContext {
	shipments: Shipment[]
	setShipments: React.Dispatch<React.SetStateAction<Shipment[]>>
}	

export const ShipmentContext = createContext<ShipmentContext | null>(null)