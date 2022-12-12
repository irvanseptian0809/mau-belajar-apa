import styled, { css } from "styled-components";

const Button = styled.button`
  cursor: pointer;
  background: unset;
  border: unset;
  padding: 13px 23px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  
  ${props => props.primary && css`
  border: 1px solid #7800EF;
    &:hover {
      background: #9c56e0;
    }
  `}

  ${props => props.outlined && css`
    background: white;
    color: #7800EF;
  `}
  ${props => props.inline && css`
    background: #7800EF;
    color: white;
  `}
`

export default function ButtonView({
  children,
  ...otherProps
}) {
  return <Button
    {...otherProps}
  >
    {children}
  </Button>
}