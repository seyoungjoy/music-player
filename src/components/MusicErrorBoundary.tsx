import { PropsWithChildren, ReactNode } from 'react';

import { ErrorType } from '../pages/Main';

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
