import { useContext } from "react"
import { Shipment, ShipmentContext } from "../contexts/ShipmentContext"

export const useShipment = () => {
    const context = useContext(ShipmentContext)
	if (!context) throw new Error('useAuth must be used within a ShipmentContext.Provider')
	const { shipments, setShipments } = context

    const addShipment = (shipment: Shipment) => {
        setShipments([...shipments, shipment])
    }

    return { shipments, addShipment }
}