export function uTranformAxiosError(error: any) {
  return {
    status: "ERROR",
    name: error.response?.data?.name || "UNKNOWM_ERROR",
    message: error.response?.data?.message || "Something wrong",
    statusCode: error.response?.data.statusCode || 500,
  };
}
