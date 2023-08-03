import { useContext } from 'react'
import { Id, ShipmentContext } from '@contexts/ShipmentContext'

export const useShipment = () => {
	const context = useContext(ShipmentContext)
	if (!context) throw new Error('useShipment must be used within a ShipmentContext.Provider')
	const { shipments, setShipments, formData, setFormData } = context

	const addShipment = () => {
		const newShipment = { id: new Date().getTime(), ...formData }
		setShipments([...shipments, newShipment])
	}

	const deleteShipment = (id: Id) => {
		setShipments(shipments.filter((shipment) => shipment.id !== id))
	}

	const editShipment = (id: Id) => {
		const shipment = shipments.find((shipment) => shipment.id === id)
		if (!shipment) return
		setFormData({
			invoiceNumbers: shipment.invoiceNumbers,
			senderAddress: shipment.senderAddress,
			recipientAddress: shipment.recipientAddress,
		})
		deleteShipment(id)
	}

	return { shipments, addShipment, formData, setFormData, editShipment, deleteShipment }
}
