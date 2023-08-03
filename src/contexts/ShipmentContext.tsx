import { createContext } from 'react'

export type Id = number
export type InvoiceNumbers = string
export type SenderAddress = string
export type RecipientAddress = string

export interface FormData {
	invoiceNumbers: InvoiceNumbers
	senderAddress: SenderAddress
	recipientAddress: RecipientAddress
}

export interface Shipment extends FormData {
	id: Id
}

interface ShipmentContext {
	shipments: Shipment[]
	setShipments: React.Dispatch<React.SetStateAction<Shipment[]>>
	formData: FormData
	setFormData: React.Dispatch<React.SetStateAction<FormData>>
}

export const ShipmentContext = createContext<ShipmentContext | null>(null)
