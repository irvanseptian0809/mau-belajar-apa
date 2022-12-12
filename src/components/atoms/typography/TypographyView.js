import styled, { css } from "styled-components";

const Typography = styled.div`
  font-size: 16px;
  color: #252A3C;
  ${props => props.size && css`
    font-size: ${props.size}px!important;
  `}

  ${props => props.color && css`
    color: ${props.color}!important;
  `}

  ${props => props.weight && css`
    font-weight: ${props.weight};
  `}

  ${props => props.primary && css`
    color: #7800EF!important;
  `}
`

export default function TypographyView({
  children,
  size,
  color,
  weight,
}) {
  return <Typography
    size={size}
    color={color}
    weight={weight}
  >
    {children}
  </Typography> 
}