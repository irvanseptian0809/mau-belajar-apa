import styled from "styled-components";

const Input = styled.input`
  border-radius: 5px;
  font-size: 16px;
  border: unset;
  outline: none;
`

export default function InputView({
  ...otherProps
}) {
  return <Input {...otherProps}/>
}