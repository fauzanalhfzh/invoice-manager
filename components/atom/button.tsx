'use client'

import Link from "next/link";
import { IoAddSharp, IoPencil, IoTrashBin } from "react-icons/io5";
import { useFormStatus } from "react-dom";
import clsx from "clsx";
import { DeleteInvoice } from "@/lib/actions";

export function CreateButton () {
  return (
    <Link
      href="/invoice/create"
      className="inline-flex items-center space-x-1 text-white bg-blue-700 hover:bg-blue-800 px-5 py-[9px] rounded-sm text-sm"
    >
      <IoAddSharp size={20} />
      Create
    </Link>
  )
}

export function DeleteButton({id}: {id:string}) {
  const deleteInvoiceById = DeleteInvoice.bind(null, id)
  return(
    <form action={deleteInvoiceById}>
      <button className="rounded-md border p-1 hover:bg-gray-100">
        <IoTrashBin size={20} />
      </button>
    </form>
  )
}

export function EditButton ({id}: {id:string}) {
  return (
    <Link
      href={`/invoice/edit/${id}`}
      className="rounded-md border p-1 hover:bg-gray-100"
    >
      <IoPencil size={20} />
    </Link>
  )
}

export function SubmitButton ({label}: {label:string}) {
  const {pending} = useFormStatus();

  const className = clsx("text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-sm text-sm w-full px-5 py-3 text-center",{
    "opacity-50 cursor-progress": pending
  })
  return (
    <button
      type="submit"
      className={className}
      disabled={pending}
    >
      {label === "Save" ? (
        <span>{pending ? "Saving...": "Save"}</span>
      ): (
        <span>{pending ? "Updating...": "Update"}</span>
      )}
    </button>
  )
}