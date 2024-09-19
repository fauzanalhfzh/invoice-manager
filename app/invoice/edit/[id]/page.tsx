import UpdateForm from "@/components/molecules/edit-invoice";
import { GetInvoiceById } from "@/lib/data";
import { notFound } from "next/navigation";

export default async function UpdateContactPage({params}: {params:{id:string}}) {
  const id = params.id
  const invoice = await GetInvoiceById(id)

  if (!invoice) {
    notFound()
  }

  return (
    <div className="max-w-md mx-auto mt-5">
      <h1 className="text-2xl text-center mb-2">Update Contact</h1>
      <UpdateForm invoice={invoice} />
    </div>
  )
}
