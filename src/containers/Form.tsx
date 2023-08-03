import { useEffect, useState } from 'react'
import { useShipment } from '@hooks/useShipment'
import { Button } from '@components/buttons'
import { Checkbox, Input, Textarea } from '@components/inputs'

export const Form = () => {
	const savedSenderAddress = localStorage.getItem('senderAddress')
	const [isSavedSenderAddress, setIsSavedSenderAddress] = useState(Boolean(savedSenderAddress))
	const { addShipment, formData, setFormData } = useShipment()

	useEffect(() => {
		isSavedSenderAddress
			? localStorage.setItem('senderAddress', formData.senderAddress)
			: localStorage.clear()
	}, [formData.senderAddress, isSavedSenderAddress])

	return (
		<form
			className="flex flex-col gap-3"
			onSubmit={(e) => {
				e.preventDefault()
				addShipment()
				setFormData({
					invoiceNumbers: '',
					senderAddress: isSavedSenderAddress ? formData.senderAddress : '',
					recipientAddress: '',
				})
			}}
		>
			<Textarea
				label="Adres nadawcy"
				name="senderAddress"
				placeholder="Wpisz adres nadawcy"
				setValue={(e) => setFormData({ ...formData, senderAddress: e })}
				value={formData.senderAddress}
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
				setValue={(e) => setFormData({ ...formData, invoiceNumbers: e })}
				value={formData.invoiceNumbers}
			/>
			<Textarea
				label="Adres odbiorcy"
				name="recipientAddress"
				placeholder="Wpisz adres odbiorcy"
				setValue={(e) => setFormData({ ...formData, recipientAddress: e })}
				value={formData.recipientAddress}
			/>
			<Button label="Dodaj" type="submit" variant="filled" />
		</form>
	)
}
