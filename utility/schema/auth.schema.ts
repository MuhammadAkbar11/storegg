import { z } from "zod";

export const signupSchema = z
  .object({
    name: z.string().min(1, {
      message: "Name is required",
    }),
    password: z
      .string()
      .min(1, {
        message: "Password is required",
      })
      .min(6, "Password too short - should be 6 chars minimum"),
    passwordConfirmation: z.string().min(1, {
      message: "Password confirmation is required",
    }),
    email: z
      .string()
      .min(1, {
        message: "Email is required",
      })
      .email("Not a valid email"),
  })
  .refine(data => data.password == data.passwordConfirmation, {
    message: "Password do not match!",
    path: ["passwordConfirmation"],
  });

export type SignupInputTypes = z.TypeOf<typeof signupSchema>;
