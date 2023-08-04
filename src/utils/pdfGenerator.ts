import { jsPDF } from 'jspdf'
import { Shipment } from '@contexts/ShipmentContext'
import '@assets/Montserrat-normal'

export class PDFGenerator {
	generateLetter(shipments: Shipment[]) {
		const doc = new jsPDF({
			unit: 'mm',
			format: 'a4',
			compress: true,
		})
		doc.setFont('Montserrat', 'normal')
		shipments.forEach((shipment, index) => {
			if (index > 0) doc.addPage()
			doc.setFontSize(10)
			doc.text(shipment.senderAddress, 145, 10, { angle: 270, maxWidth: 80 })
			doc.setFontSize(12)
			doc.text(shipment.recipientAddress, 60, 100, { angle: 270, maxWidth: 100 })
		})
		doc.save('listy.pdf')
	}

	generateConfirmation(shipments: Shipment[]) {
		const doc = new jsPDF({
			unit: 'mm',
			format: 'a4',
			compress: true,
		})
		doc.setFont('Montserrat', 'normal')
		shipments.forEach((shipment, index) => {
			if (index > 0) doc.addPage()
			doc.setFontSize(6)
			doc.text(shipment.invoiceNumbers, 92, 15, { angle: 270, maxWidth: 45 })
			doc.setFontSize(8)
			doc.text(shipment.recipientAddress, 75, 15, { angle: 270, maxWidth: 65 })
			doc.text('x', 40, 17, { angle: 270 })
			doc.setFontSize(10)
			doc.text(shipment.senderAddress, 44, 68, { angle: 270, maxWidth: 80 })
		})
		doc.save('zwrotki.pdf')
	}
}
