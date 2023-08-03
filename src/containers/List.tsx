import { useShipment } from '@hooks/useShipment'
import { Button, IconButton } from '@components/buttons'
import deleteIcon from '@assets/delete.svg'
import editIcon from '@assets/edit.svg'

export const List = () => {
	const { shipments, editShipment, deleteShipment } = useShipment()

	return (
		<div className="flex h-full max-h-[70vh] flex-col lg:max-h-full">
			<ul className="flex flex-1 flex-col gap-2 overflow-auto">
				{shipments.map(({ id, invoiceNumbers, recipientAddress }) => (
					<li
						className="grid grid-cols-[1fr_auto] gap-1 rounded-md bg-white p-2"
						key={id}
					>
						<header className="text-sm">{invoiceNumbers}</header>
						<IconButton
							alt="Ikona edycji"
							onClick={() => editShipment(id)}
							src={editIcon}
							variant="outlined"
						/>
						<p>{recipientAddress}</p>
						<IconButton
							alt="Ikona kosza"
							onClick={() => deleteShipment(id)}
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
	)
}
