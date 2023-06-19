import React from 'react';

type Props = {
  loading: boolean;
};
const Spin = ({ loading }: Props) => {
  return (
    <div
      className="loadingio-spinner-spinner-pqrczo57grl"
      style={{ display: loading ? 'block' : 'none' }}
    >
      <div className="ldio-y4l88lhde3">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Spin;
