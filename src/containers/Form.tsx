import { PrimaryButton } from '../components/buttons/PrimaryButton'
import { CheckboxInput } from '../components/inputs/CheckboxInput'
import { PrimaryInput } from '../components/inputs/PrimaryInput'
import { TextareaInput } from '../components/inputs/TextareaInput'

export const Form = () => (
	<form className="flex flex-col">
		<TextareaInput name="senderAddress">Adres nadawcy</TextareaInput>
		<CheckboxInput name="rememberSenderAddress">
			Zapamiętaj adres nadawcy
		</CheckboxInput>
		<PrimaryInput name="invoiceNumbers">Numery faktur</PrimaryInput>
		<TextareaInput name="recipientAddress">Adres odbiorcy</TextareaInput>
		<PrimaryButton>Dodaj</PrimaryButton>
	</form>
)
