import { PropsWithChildren, ReactNode } from 'react';

type Props = {
  loading: boolean;
  children: PropsWithChildren<ReactNode>;
};
const MusicSuspense = ({ loading, children }: Props) => {
  if (loading) {
    return <div>Music loading...</div>;
  }
  return <>{children}</>;
};

export default MusicSuspense;
