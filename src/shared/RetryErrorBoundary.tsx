import { PropsWithChildren } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { useQueryErrorResetBoundary } from 'react-query';

const RetryErrorBoundary = ({ children }: PropsWithChildren<unknown>) => {
  const { reset } = useQueryErrorResetBoundary();

  return (
    <ErrorBoundary
      onReset={reset}
      fallbackRender={({ resetErrorBoundary }) => (
        <div>
          <p> 데이터를 불러오는데 실패하였습니다. </p>
          <button onClick={() => resetErrorBoundary()}> 다시 시도 </button>
        </div>
      )}
    >
      {children}
    </ErrorBoundary>
  );
};

export default RetryErrorBoundary;
