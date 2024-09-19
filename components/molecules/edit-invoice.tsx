'use client'

import { UpdateInvoice } from "@/lib/actions";
import { Invoice } from "@prisma/client";
import { useFormState } from "react-dom";
import { SubmitButton } from "../atom/button";

export default function UpdateForm({ invoice }: { invoice: Invoice }) {
  const UpdateInvoiceById = UpdateInvoice.bind(null, invoice.id);
  const [state, formAction] = useFormState(UpdateInvoiceById, null);

  return (
    <div className="max-w-md mx-auto p-5 border rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Update Invoice</h2>
      <form action={formAction}>
        <div className="mb-5">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-900"
          >
            Full Name
          </label>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            name="name"
            id="name"
            placeholder="Full Name..."
            value={invoice.name}
            required
          />
          <div id="name-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm text-red-500">{state?.Error?.name}</p>
          </div>
        </div>
        <div className="mb-5">
          <label
            htmlFor="address"
            className="block text-sm font-medium text-gray-900"
          >
            Address
          </label>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            name="address"
            id="address"
            placeholder="Address..."
            required
          />
          <div id="address-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm text-red-500">{state?.Error?.address}</p>
          </div>
        </div>
        <div className="mb-5">
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-900"
          >
            Phone Number
          </label>
          <input
            type="tel"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            name="phone"
            id="phone"
            placeholder="Phone Number..."
            required
          />
          <div id="phone-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm text-red-500">{state?.Error?.phone}</p>
          </div>
        </div>
        <div className="mb-5">
          <label
            htmlFor="type_product"
            className="block text-sm font-medium text-gray-900"
          >
            Type Product
          </label>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            name="type_product"
            id="type_product"
            placeholder="Type Product..."
            required
          />
          <div id="type_product-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm text-red-500">
              {state?.Error?.type_product}
            </p>
          </div>
        </div>
        <div className="mb-5">
          <label
            htmlFor="model"
            className="block text-sm font-medium text-gray-900"
          >
            Model
          </label>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            name="model"
            id="model"
            placeholder="Model..."
            required
          />
          <div id="model-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm text-red-500">{state?.Error?.model}</p>
          </div>
        </div>
        <div className="mb-5">
          <label
            htmlFor="serial_number"
            className="block text-sm font-medium text-gray-900"
          >
            Serial Number
          </label>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            name="serial_number"
            id="serial_number"
            placeholder="Serial Number..."
            required
          />
          <div id="serial_number-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm text-red-500">
              {state?.Error?.serial_number}
            </p>
          </div>
        </div>
        <div className="mb-5">
          <label
            htmlFor="accessories"
            className="block text-sm font-medium text-gray-900"
          >
            Accessories
          </label>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            name="accessories"
            id="accessories"
            placeholder="Accessories..."
            required
          />
          <div id="accessories-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm text-red-500">
              {state?.Error?.accessories}
            </p>
          </div>
        </div>
        <div className="mb-5">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-900"
          >
            Description
          </label>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            name="description"
            id="description"
            placeholder="Description..."
            required
          />
          <div id="description-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm text-red-500">
              {state?.Error?.description}
            </p>
          </div>
        </div>
        <div className="mb-5">
          <label
            htmlFor="notes"
            className="block text-sm font-medium text-gray-900"
          >
            Notes
          </label>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            name="notes"
            id="notes"
            placeholder="Notes..."
            required
          />
          <div id="notes-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm text-red-500">{state?.Error?.notes}</p>
          </div>
        </div>
        <div className="mb-5">
          <label
            htmlFor="status"
            className="block text-sm font-medium text-gray-900"
          >
            Status
          </label>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            name="status"
            id="status"
            placeholder="Status..."
            required
          />
          <div id="status-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm text-red-500">{state?.Error?.status}</p>
          </div>
        </div>
        <div id="message-error" aria-live="polite" aria-atomic="true">
          <p className="mt-2 text-sm text-red-500">{state?.message}</p>
        </div>
        <SubmitButton label="Update" />
      </form>
    </div>
  );
}
