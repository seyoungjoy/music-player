export type ErrorResponse = {
  message: string;
  statusCode?: number;
};

export type FetchResponse<R> = [ErrorResponse, null] | [null, R];
