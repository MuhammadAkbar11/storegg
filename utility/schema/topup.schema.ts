import { z } from "zod";

export const toptupSchema = z.object({
  accountID: z.string().min(1, {
    message: "Game ID is required",
  }),
  bankTransfer: z.string().optional(),
  bankTransferAccount: z
    .string()
    .min(1, {
      message: "Bank Account Name is required",
    })
    .optional(),
  paymentMethod: z.string().min(1, {
    message: "Payment is required",
  }),
  nominal: z.string().min(1, {
    message: "Nominal is required",
  }),
});

export type TopupInput = z.TypeOf<typeof toptupSchema>;
