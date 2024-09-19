import { GetInvoice } from "@/lib/data"
import { formatDate } from "@/lib/utils"
import { DeleteButton, EditButton } from "../atom/button"

export default async function InvoiceTable() {
    const invoices = await GetInvoice()

    return (
        <table className="table w-full text-sm text-left text-gray-500">
      <thead className="text-sm text-gray-700 uppercase bg-gray-50">
        <tr>
          <th className="py-3 px-3 text-center">#</th>
          <th className="py-3 px-6">Name</th>
          <th className="py-3 px-6">Type Product</th>
          <th className="py-3 px-6">Model</th>
          <th className="py-3 px-6">Serial Number</th>
          <th className="py-3 px-6">Status</th>
          <th className="py-3 px-6">Created At</th>
          <th className="py-3 px-6 text-center">Actions</th>
        </tr>
      </thead>
      <tbody>
        {invoices.map((invoice, index) => (
        <tr key={invoice.id} className="bg-white border-b hover">
          <td className="py-3 px-3 text-center">{index + 1}</td>
          <td className="py-3 px-6">{invoice.name}</td>
          <td className="py-3 px-6">{invoice.type_product}</td>
          <td className="py-3 px-6">{invoice.model}</td>
          <td className="py-3 px-6">{invoice.serial_number}</td>
          <td className="py-3 px-6">{invoice.status}</td>
          <td className="py-3 px-6">{formatDate(invoice.created_at.toString())}</td>
          <td className="flex justify-center gap-1 py-3">
            <EditButton id={invoice.id} />
            <DeleteButton id={invoice.id} />
          </td>
        </tr>
        ))}
      </tbody>
    </table>
    )
    
}