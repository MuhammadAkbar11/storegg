export interface IToast {
  id?: string;
  type: "error" | "warning" | "success" | "default";
  title?: string;
  message?: string;
}
