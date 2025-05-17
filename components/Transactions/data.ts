export interface Transaction {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
}
export type StatusType = "pending" | "processing" | "success" | "failed";
export const transactions: Transaction[] = [
  {
    id: "489dfds1d42",
    amount: 764,
    status: "failed",
    email: "admin@gmail.com",
  },
  {
    id: "48441d42",
    amount: 99,
    status: "success",
    email: "eslam@gmail.com",
  },
  {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "489e1d42",
    amount: 125,
    status: "processing",
    email: "example@gmail.com",
  },
];
