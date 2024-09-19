import { CreateButton } from "@/components/atom/button";
import Seacrh from "@/components/atom/search";
import InvoiceTable from "@/components/molecules/invoice-table";

export default function Invoice() {
    return (
      <>
        <div className='max-w-screen-md mx-auto mt-5'>
        <div className="flex items-center justify-between gap-1 mb-5">
          <Seacrh />
          <CreateButton />
        </div>
      </div>
        <InvoiceTable />
      </>
    )
  }
  