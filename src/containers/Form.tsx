import { useEffect, useState } from 'react'
import { useShipment } from '../hooks/useShipment'
import { Button } from '../components/buttons/Button'
import { Checkbox } from '../components/inputs/Checkbox'
import { Input } from '../components/inputs/Input'
import { Textarea } from '../components/inputs/Textarea'

export const Form = () => {
	const savedSenderAddress = localStorage.getItem('senderAddress')
	const [invoiceNumbers, setInvoiceNumbers] = useState('')
	const [isSavedSenderAddress, setIsSavedSenderAddress] = useState(Boolean(savedSenderAddress))
	const [senderAddress, setSenderAddress] = useState(savedSenderAddress || '')
	const [recipientAddress, setRecipientAddress] = useState('')
	const { addShipment } = useShipment()

	useEffect(() => {
		isSavedSenderAddress
			? localStorage.setItem('senderAddress', senderAddress)
			: localStorage.clear()
	}, [senderAddress, isSavedSenderAddress])

	return (
		<form
			className="flex flex-col gap-3"
			onSubmit={(e) => {
				e.preventDefault()
				addShipment({
					id: new Date().getTime(),
					invoiceNumbers,
					senderAddress,
					recipientAddress,
				})
				setInvoiceNumbers('')
				setRecipientAddress('')
				!isSavedSenderAddress && setSenderAddress('')
			}}
		>
			<Textarea
				label="Adres nadawcy"
				name="senderAddress"
				placeholder="Wpisz adres nadawcy"
				setValue={setSenderAddress}
				value={senderAddress}
			/>
			<Checkbox
				label="Zapamiętaj adres nadawcy"
				name="rememberSenderAddress"
				setValue={setIsSavedSenderAddress}
				value={isSavedSenderAddress}
			/>
			<Input
				label="Numery faktur"
				name="invoiceNumbers"
				placeholder="Wpisz numery faktur"
				setValue={setInvoiceNumbers}
				value={invoiceNumbers}
			/>
			<Textarea
				label="Adres odbiorcy"
				name="recipientAddress"
				placeholder="Wpisz adres odbiorcy"
				setValue={setRecipientAddress}
				value={recipientAddress}
			/>
			<Button label="Dodaj" type="submit" variant="filled" />
		</form>
	)
}
