export const errorMessage = (status, message, err) => {
  const error = new Error();
  error.status = status;
  error.message = `${message}\n詳細錯誤：${err}`;
  return error;
};
