export function uTranformAxiosError(error: any) {
  return {
    name: error.response?.data?.name || "UNKNOWM_ERROR",
    message: error.response?.data?.message || "Something wrong",
    statusCode: error.response?.data?.statusCode || 500,
    ...error.response?.data?.data,
  };
}
