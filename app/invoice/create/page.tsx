import CreateInvoice from "@/components/molecules/create-invoice"

export default function CreateInvoicePage() {
  return (
    <div className="max-w-md mx-auto mt-5">
      <h1 className="text-2xl text-center mb-2 font-bold">Add new Invoice</h1>
      <CreateInvoice />
    </div>
  )
}
