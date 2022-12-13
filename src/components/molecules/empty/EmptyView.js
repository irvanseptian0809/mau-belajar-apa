import styled from "styled-components";

import {
  Box,
} from "../../atoms"

const Empty = styled(Box)`
  text-align: center;
  margin-bottom: 35px;
  border: unset;
  padding: 50px 0;
`

export default function EmptyView({
  children,
}) {
  return <Empty>
    {children}
  </Empty>
}