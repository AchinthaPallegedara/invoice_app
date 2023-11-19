import PageHeader from "@/components/Page-Header";
import ExportButton from "@/components/export-button";
import { Button } from "@/components/ui/button";
import { invoiceListPageHeader } from "@/constants";
import { invoiceData } from "@/data/invoice-data";
import { Plus } from "lucide-react";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <PageHeader
        title={invoiceListPageHeader.title}
        breadcrumb={invoiceListPageHeader.breadcrumb}
      >
        <div className="mt-4 flex items-center gap-3 @lg:mt-0">
          <ExportButton
            data={invoiceData}
            fileName="invoice_data"
            header="ID,Name,Username,Avatar,Email,Due Date,Amount,Status,Created At"
          />
          <Link
            href={"/invoice/create"}
            className="w-full sm:w-auto  mt-4 sm:mt-0"
          >
            <Button className="w-full sm:w-auto   sm:mt-0">
              <Plus className="me-1.5 h-[17px] w-[17px]" />
              Add Invoice
            </Button>
          </Link>
        </div>
      </PageHeader>
    </>
  );
};

export default page;
