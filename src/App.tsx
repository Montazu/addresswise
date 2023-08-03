import { useState } from 'react'
import { Shipment, ShipmentContext } from './contexts/ShipmentContext'
import { MainLayout } from './layouts/MainLayout'
import deleteIcon from './assets/delete.svg'
import editIcon from './assets/edit.svg'
import { Button } from './components/buttons/Button'
import { IconButton } from './components/buttons/IconButton'

export const App = () => {
	const [shipments, setShipments] = useState<Shipment[]>([])

	return (
		<ShipmentContext.Provider value={{ shipments, setShipments }}>
			<MainLayout>
				{shipments.length ? (
					<div className="flex h-full max-h-[70vh] flex-col lg:max-h-full">
						<ul className="flex flex-1 flex-col gap-2 overflow-auto">
							{shipments.map((shipment) => (
								<li
									className="grid grid-cols-[1fr_auto] gap-1 rounded-md bg-white p-2"
									key={shipment.id}
								>
									<header className="text-sm">{shipment.invoiceNumbers}</header>
									<IconButton
										alt="Ikona edycji"
										src={editIcon}
										variant="outlined"
									/>
									<p>{shipment.recipientAddress}</p>
									<IconButton
										alt="Ikona kosza"
										src={deleteIcon}
										variant="filled"
									/>
								</li>
							))}
						</ul>
						<div className="flex flex-wrap justify-end gap-1 pt-2">
							<Button label="Listy" variant="filled" />
							<Button label="Potwierdzenia odbioru" variant="outlined" />
						</div>
					</div>
				) : (
					<p className="flex h-full select-none items-center justify-center text-xl text-gray-500">
						Brak wysyłek
					</p>
				)}
			</MainLayout>
		</ShipmentContext.Provider>
	)
}
