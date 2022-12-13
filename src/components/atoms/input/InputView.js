import styled from "styled-components";

const Input = styled.input`
  width: 100%;
  font-size: 16px;
  border: unset;
  outline: none;
`

export default function InputView({
  ...otherProps
}) {
  return <Input {...otherProps}/>
}