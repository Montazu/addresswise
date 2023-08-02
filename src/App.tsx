import { useState } from 'react'
import { Shipment, ShipmentContext } from './contexts/ShipmentContext'
import { MainLayout } from './layouts/MainLayout'
import { PrimaryButton } from './components/buttons/PrimaryButton'
import { SecondaryButton } from './components/buttons/SecondaryButton'
import { SecondaryIconButton } from './components/buttons/SecondaryIconButton'
import { PrimaryIconButton } from './components/buttons/PrimaryIconButton'
import deleteIcon from './assets/delete.svg'
import editIcon from './assets/edit.svg'

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
									<SecondaryIconButton src={editIcon} />
									<p>{shipment.recipientAddress}</p>
									<PrimaryIconButton src={deleteIcon} />
								</li>
							))}
						</ul>
						<div className="flex flex-wrap justify-end gap-1 pt-2">
							<PrimaryButton label="Listy" onClick={() => console.log('elo')} />
							<SecondaryButton
								label="Potwierdzenia odbioru"
								onClick={() => console.log('elo')}
							/>
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
