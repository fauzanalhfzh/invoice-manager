'use server'

import {z} from 'zod'
import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { redirect } from 'next/navigation'

const invoiceSchema = z.object({
    name: z.string().max(50),
    address: z.string().max(100),
    phone: z.string().max(20),
    type_product: z.string().max(50),
    model: z.string().max(50),
    serial_number: z.string().max(50),
    description: z.string().max(150),
    accessories: z.string().max(150),
    notes: z.string().max(200),
    status: z.string().max(30),
})

export async function SaveInvoice(prevState: any, formData: FormData) {
    const validatedFields = invoiceSchema.safeParse(Object.fromEntries(formData.entries()))
     
    if(!validatedFields.success){
        return {
            Error: validatedFields.error.flatten().fieldErrors
        }
    }

    try {
        await prisma.invoice.create({
            data: {
                name: validatedFields.data.name,
                address: validatedFields.data.address,
                phone: validatedFields.data.phone,
                type_product: validatedFields.data.type_product,
                model: validatedFields.data.model,
                serial_number: validatedFields.data.serial_number,
                accessories: validatedFields.data.accessories,
                description: validatedFields.data.description,
                notes: validatedFields.data.notes,
                status: validatedFields.data.status,
            }
        })
    } catch (error) {
        return {
            message: "Failed to create Invoice!"
        }
    }

    revalidatePath("/invoice")
    redirect("/invoice")
}

export async function DeleteInvoice(id: string) {
    try {
        await prisma.invoice.delete({
            where: { id }
        })
    } catch (error) {
        return {
            message: "Failed to delete invoice"
        }
    }
    revalidatePath("/invoice")
}

export async function UpdateInvoice(id: string, prevState: any, formData: FormData) {
    const validatedFields = invoiceSchema.safeParse(Object.fromEntries(formData.entries()));

    if (!validatedFields.success) {
        return {
          Error: validatedFields.error.flatten().fieldErrors
        }
      }

    try {
        await prisma.invoice.update({
            where: { id },
            data: {
                name: validatedFields.data.name,
                address: validatedFields.data.address,
                phone: validatedFields.data.phone,
                type_product: validatedFields.data.type_product,
                model: validatedFields.data.model,
                serial_number: validatedFields.data.serial_number,
                accessories: validatedFields.data.accessories,
                description: validatedFields.data.description,
                notes: validatedFields.data.notes,
                status: validatedFields.data.status,
            }
        })
    } catch (error) {
        return{
            message: "Failed to update contact!"
        }
    }

    revalidatePath("/invoice")
    redirect("/invoice")
}