import { PropsWithChildren, ReactNode } from 'react';

import { ErrorResponse } from '../services';

export type ErrorType = {
  isError: boolean;
  errorInfo?: ErrorResponse;
};

type Props = {
  error: ErrorType;
  children: PropsWithChildren<ReactNode>;
};

const MusicErrorBoundary = ({ error, children }: Props) => {
  if (error.isError) {
    return (
      <>
        <div>{error.errorInfo?.message}</div>
        <div>{error.errorInfo?.statusCode}</div>
      </>
    );
  }
  return <>{children}</>;
};

export default MusicErrorBoundary;
