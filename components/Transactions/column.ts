import { Badge, Button, TransactionsDataTableDropdown } from "#components";
import type { ColumnDef } from "@tanstack/vue-table";
import { ArrowUpDown } from "lucide-vue-next";
import { h } from "vue";
import type { StatusType, Transaction } from "./data";
export const transactionCols: ColumnDef<Transaction>[] = [
  {
    accessorKey: "email",
    // header: () => h("div", { class: "text-right" }, "Email"),
    header: ({ column }) => {
      return h(
        Button,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
        },
        () => [
          h("div", { class: "text-right" }, "Email"),
          h(ArrowUpDown, { class: "ml-2 h-4 w-4" }),
        ],
      );
    },
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
    // header: () => h("div", { class: "text-right" }, "Status"),
    header: ({ column }) => {
      return h(
        Button,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
        },
        () => [
          h("div", { class: "text-right" }, "Status"),
          h(ArrowUpDown, { class: "ml-2 h-4 w-4" }),
        ],
      );
    },
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
    // header: () => h("div", { class: "text-right" }, "Amount"),
    header: ({ column }) => {
      return h(
        Button,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
        },
        () => [
          h("div", { class: "text-right" }, "Amount"),
          h(ArrowUpDown, { class: "ml-2 h-4 w-4" }),
        ],
      );
    },
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
