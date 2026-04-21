import { z } from "zod";
import { ACCEPTED_IMAGE_TYPES, MAX_AVATAR_SIZE } from "@utility/constant.utils";

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

export const signupPhotoSchema = z.object({
  favorite: z.string({ required_error: "Favorite is required" }).min(1, {
    message: "Favorite is required",
  }),
  avatar: z
    .any()
    .refine(files => files?.length == 1, "Upload your avatar")
    .refine(
      files => files?.[0]?.size <= MAX_AVATAR_SIZE,
      `Max file size is 5MB.`
    )
    .refine(
      files => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      ".jpg, .jpeg, .png and files are accepted."
    ),
});

export const signinSchema = z.object({
  email: z
    .string()
    .min(1, {
      message: "Email is required",
    })
    .email("Not a valid email"),
  password: z
    .string()
    .min(1, {
      message: "Password is required",
    })
    .min(6, "Password too short - should be 6 chars minimum"),
});

export type SignupPhotoInputTypes = z.TypeOf<typeof signupPhotoSchema>;
export type SignupInputTypes = z.TypeOf<typeof signupSchema>;
export type SigninInputTypes = z.TypeOf<typeof signinSchema>;
