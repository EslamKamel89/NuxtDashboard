import { Badge, TransactionsDataTableDropdown } from "#components";
import type { ColumnDef } from "@tanstack/vue-table";
import { h } from "vue";
import type { StatusType, Transaction } from "./data";
export const transactionCols: ColumnDef<Transaction>[] = [
  {
    accessorKey: "email",
    header: () => h("div", { class: "text-right" }, "Email"),
    cell: ({ row }) => {
      return h(
        "div",
        { class: "text-start font-medium" },
        row.getValue("email"),
      );
    },
  },
  {
    accessorKey: "status",
    header: () => h("div", { class: "text-right" }, "Status"),
    cell: ({ row }) => {
      const value = row.getValue("status") as StatusType;
      return h(
        "div",
        { class: "text-start font-medium" },
        h(Badge, { variant: getStatusVarinat(value) }, row.getValue("status")),
      );
    },
  },
  {
    accessorKey: "amount",
    header: () => h("div", { class: "text-right" }, "Amount"),
    cell: ({ row }) => {
      const amount = Number.parseFloat(row.getValue("amount"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      return h("div", { class: "text-start font-medium" }, formatted);
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const transaction = row.original;

      return h(
        "div",
        { class: "relative" },
        h(TransactionsDataTableDropdown, {
          transaction: transaction,
        }),
      );
    },
  },
];

const getStatusVarinat = (status: StatusType) => {
  if (status == "failed") return "destructive";
  if (status == "pending") return "secondary";
  if (status == "processing") return "outline";
  return "default";
};
