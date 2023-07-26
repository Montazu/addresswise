export const App = () => {
	return (
		<div className="grid h-full grid-rows-[auto_1fr] gap-4 lg:grid-cols-2 lg:grid-rows-1">
			<div className="h-auto rounded-lg bg-gray-200 p-4">
				<form className="flex flex-col">
					<div className="mb-1">
						<label className="text-sm" htmlFor="senderAddress">
							Adres nadawcy
						</label>
						<textarea
							className="w-full p-2 text-sm"
							id="senderAddress"
							name="senderAddress"
							required
							rows={4}
						/>
					</div>

					<div className="my-1 flex align-middle">
						<input
							className="p-2 text-sm"
							id="rememberSenderAddress"
							name="rememberSenderAddress"
							type="checkbox"
						/>
						<label
							className="ml-2 text-sm"
							htmlFor="rememberSenderAddress"
						>
							Zapamiętaj adres nadawcy
						</label>
					</div>

					<div className="my-1">
						<label className="text-sm" htmlFor="invoiceNumbers">
							Numery faktur
						</label>
						<input
							className="w-full p-2 text-sm"
							id="invoiceNumbers"
							name="invoiceNumbers"
							required
							type="text"
						/>
					</div>

					<div className="my-1">
						<label className="text-sm" htmlFor="recipientAddress">
							Adres odbiorcy
						</label>
						<textarea
							className="w-full p-2 text-sm"
							id="recipientAddress"
							name="recipientAddress"
							required
							rows={4}
						/>
					</div>

					<button className="mt-1 self-end rounded-md bg-indigo-600 px-8 py-3 text-sm text-white">
						Dodaj
					</button>
				</form>
			</div>
			<div className="h-full rounded-lg bg-gray-200 p-4"></div>
		</div>
	)
}
