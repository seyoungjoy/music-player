import { PropsWithChildren, ReactNode } from 'react';

type Props = {
  loading: boolean;
  children: PropsWithChildren<ReactNode>;
};
const MusicSuspense = ({ loading, children }: Props) => {
  if (loading) {
    return <div style={{ color: '#ffffff' }}>Music loading...</div>;
  }
  return <>{children}</>;
};

export default MusicSuspense;
