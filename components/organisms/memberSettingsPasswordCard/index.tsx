/* eslint-disable @typescript-eslint/no-explicit-any */
import { zodResolver } from "@hookform/resolvers/zod";
import {
  getUserToken,
  putMemberPasswordService,
} from "@services/member.service";
import { useToastContext } from "@utility/context/ToastContext";
import {
  ChangePasswordFormData,
  changePasswordSchema,
} from "@utility/schema/profile.schema";
import React from "react";
import { useForm } from "react-hook-form";
import { Button, Form } from "react-bootstrap";
import { useMutation } from "react-query";

function getValidationMessage(fieldError: any): string | null {
  if (!fieldError) return null;
  if (typeof fieldError === "string") return fieldError;
  if (
    Array.isArray(fieldError?.message) &&
    typeof fieldError.message[0] === "string"
  ) {
    return fieldError.message[0];
  }
  if (typeof fieldError?.message === "string") return fieldError.message;
  return null;
}

function MemberSettingsPasswordCard() {
  const { onAddToast } = useToastContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setError,
  } = useForm<ChangePasswordFormData>({
    resolver: zodResolver(changePasswordSchema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    },
  });

  const passwordMutation = useMutation(putMemberPasswordService);

  const onSubmitPassword = (values: ChangePasswordFormData) => {
    const token = getUserToken();
    if (!token) {
      onAddToast({
        variant: "error",
        title: "Error",
        message: "Authentication token not found. Please log in again.",
      });
      return;
    }

    passwordMutation.mutate(
      {
        token,
        payload: values,
      },
      {
        onSuccess() {
          onAddToast({
            variant: "success",
            title: "Success!",
            message: "Password updated successfully.",
          });
          reset();
        },
        onError(error: any) {
          const validation = error?.validation;
          if (validation) {
            const currentPasswordMsg =
              getValidationMessage(validation.currentPassword) ||
              getValidationMessage(validation.oldPassword);
            const newPasswordMsg =
              getValidationMessage(validation.newPassword) ||
              getValidationMessage(validation.password);
            const confirmPasswordMsg =
              getValidationMessage(validation.confirmNewPassword) ||
              getValidationMessage(validation.password2);

            if (currentPasswordMsg) {
              setError("currentPassword", {
                message: currentPasswordMsg,
              });
            }
            if (newPasswordMsg) {
              setError("newPassword", {
                message: newPasswordMsg,
              });
            }
            if (confirmPasswordMsg) {
              setError("confirmNewPassword", {
                message: confirmPasswordMsg,
              });
            }
          }

          onAddToast({
            variant: "error",
            title: "Error",
            message:
              error?.message || "Failed to update password. Please try again.",
          });
        },
      }
    );
  };

  return (
    <div className="bg-card pt-30 ps-30 pe-30 pb-30 mt-30">
      <h2 className="text-xl fw-semibold color-palette-1 mb-4">
        Change Password
      </h2>
      <p className="text-lg color-palette-2 mb-4">
        Update your password to keep your account secure.
      </p>
      <Form onSubmit={handleSubmit(onSubmitPassword)}>
        <Form.Group className="pt-2">
          <Form.Label
            htmlFor="currentPassword"
            className="text-lg fw-medium color-palette-1 mb-10"
          >
            Current Password
          </Form.Label>
          <Form.Control
            type="password"
            className={`rounded-pill text-lg ${
              errors.currentPassword ? "is-invalid" : ""
            }`}
            id="currentPassword"
            placeholder="Enter your current password"
            {...register("currentPassword")}
          />
          {errors.currentPassword && (
            <Form.Text className="text-danger">
              {errors.currentPassword.message}
            </Form.Text>
          )}
        </Form.Group>
        <Form.Group className="pt-30">
          <Form.Label
            htmlFor="newPassword"
            className="text-lg fw-medium color-palette-1 mb-10"
          >
            New Password
          </Form.Label>
          <Form.Control
            type="password"
            className={`rounded-pill text-lg ${
              errors.newPassword ? "is-invalid" : ""
            }`}
            id="newPassword"
            placeholder="Enter your new password"
            {...register("newPassword")}
          />
          {errors.newPassword && (
            <Form.Text className="text-danger">
              {errors.newPassword.message}
            </Form.Text>
          )}
        </Form.Group>
        <Form.Group className="pt-30">
          <Form.Label
            htmlFor="confirmNewPassword"
            className="text-lg fw-medium color-palette-1 mb-10"
          >
            Confirm New Password
          </Form.Label>
          <Form.Control
            type="password"
            className={`rounded-pill text-lg ${
              errors.confirmNewPassword ? "is-invalid" : ""
            }`}
            id="confirmNewPassword"
            placeholder="Confirm your new password"
            {...register("confirmNewPassword")}
          />
          {errors.confirmNewPassword && (
            <Form.Text className="text-danger">
              {errors.confirmNewPassword.message}
            </Form.Text>
          )}
        </Form.Group>

        <div className="button-group d-flex flex-column pt-50">
          <Button
            type="submit"
            className="btn-save fw-medium text-lg text-white rounded-pill"
            disabled={passwordMutation.isLoading}
          >
            {passwordMutation.isLoading
              ? "Updating Password..."
              : "Change Password"}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default MemberSettingsPasswordCard;
