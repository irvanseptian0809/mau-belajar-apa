import styled from "styled-components";

const Box = styled.div`
  background: #FFFFFF;

  border: 1px solid #DFE5EE;
  box-shadow: inset 0px 0px 3px rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  padding: 24px;
  margin: 0;
`

export default function BoxView({
  children,
  ...otherProps
}) {
  return <Box {...otherProps}>{children}</Box>
}