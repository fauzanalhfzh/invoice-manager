import {prisma} from '@/lib/prisma'
 
export async function GetInvoice() {
    try {
        const result = await prisma.invoice.findMany({})
        return result
    } catch (error) {
        throw new Error("Failed to fetch invoice data")
    }
}

export async function GetUserById(id: string) {
    try {
        const invoice = await prisma.users.findUnique({
          where: { id }
        })
        return invoice;
      } catch (error) {
        throw new Error("Failed to fetch users data")
      }
}

export async function GetInvoiceById(id: string) {
    try {
      const invoice = await prisma.invoice.findUnique({
        where: { id }
      })
      return invoice;
    } catch (error) {
      throw new Error("Failed to fetch invoice data")
    }
  }

