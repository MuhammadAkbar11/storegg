export type ToastVariantsType =
  | "error"
  | "warning"
  | "success"
  | "info"
  | "default";

export interface IToast {
  id?: string;
  variant: ToastVariantsType;
  title?: string;
  message?: string;
  hideDelay?: number;
}
