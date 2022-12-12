import styled from "styled-components";

import {
  Box,
  Typography,
} from "../../atoms"

// ICONS
import { ReactComponent as HandleDragIcon } from "../../../assets/icons/HandleDrag.svg"


// STYLED COMPONENTS
const SessionCard = styled(Box)`
  padding: 0!important;
  margin-bottom: 15px;
`

const SessionHeader = styled.div`
  padding: 23px 10px;
  display: flex;
  align-items: center;
`

export default function SessionCardView({
  children,
  ...otherProps
}) {
  return (
    <div {...otherProps}>
      <SessionCard>
        <SessionHeader>
          <HandleDragIcon />
          <Typography>Session 1</Typography>
        </SessionHeader>
        <div>
          {children}
        </div>
      </SessionCard>
    </div>
  )
}