import styled from '@emotion/styled';

export const HiddenLabel = styled.label`
  overflow: hidden;
  position: absolute;
  clip: rect(0, 0, 0, 0);
  clip-path: polygon(0 0, 0 0, 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
`;
