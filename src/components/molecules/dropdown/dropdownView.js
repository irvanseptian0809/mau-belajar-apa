import styled, { css } from "styled-components";

const Label = styled.div`
  cursor: pointer;
`

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  border-radius: 5px;
  z-index: 1;
  &:hover {
    display: block;
  }
`

const Dropdown = styled.div`
  position: relative;
  display: inline-block;
  & ${Label}:hover + ${DropdownContent} {
    display: block;
  }
`

export default function DropdownView({
  children,
  label,
}) {
  return (
    <Dropdown>
      <Label>
        {label}
      </Label>
      <DropdownContent>
        {children}
      </DropdownContent>
    </Dropdown>
  )
}