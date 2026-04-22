/* eslint-disable no-useless-escape */
// utility/schema/profile.schema.ts
import { z } from "zod";
import { ACCEPTED_IMAGE_TYPES, MAX_AVATAR_SIZE } from "@utility/constant.utils";

export const profileUpdateSchema = z.object({
  name: z
    .string()
    .min(1, {
      message: "Name is required",
    })
    .min(3, {
      message: "Name must be at least 3 characters",
    }),
  email: z
    .string()
    .min(1, {
      message: "Email is required",
    })
    .email("Not a valid email"),
  phoneNumber: z
    .string()
    .min(1, {
      message: "Phone number is required",
    })
    .min(10, {
      message: "Phone number must be at least 10 digits",
    })
    .regex(/^[0-9\-\+\s\(\)]+$/, "Phone number contains invalid characters"),
  avatar: z
    .any()
    .optional()
    .refine(
      (files) =>
        !files || files?.length === 0 || files?.[0]?.size <= MAX_AVATAR_SIZE,
      `Max file size is 5MB.`
    )
    .refine(
      (files) =>
        !files ||
        files?.length === 0 ||
        ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      ".jpg, .jpeg, .png files are accepted."
    ),
});

export type ProfileUpdateFormData = z.infer<typeof profileUpdateSchema>;
