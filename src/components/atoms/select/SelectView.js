import styled from "styled-components";

const Select = styled.select`
  border: 1px solid #b4b4b4;
  width: 100%;
  padding: 8px;
  border-radius: 5px;
  margin: 5px 0;
`

export default function SelectView({
  options,
  value,
  onChange,
}) {
  return <Select value={value} onChange={(e) => onChange(e)}>
    {options.map((item, index) => <option key={index} value={item.value}>{item.label}</option>)}
  </Select>
}