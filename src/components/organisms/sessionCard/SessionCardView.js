import styled from "styled-components";

import {
  Box,
  Button,
  Typography,
} from "../../atoms"

// ICONS
import { ReactComponent as HandleDragIcon } from "../../../assets/icons/HandleDrag.svg"
import { ReactComponent as AddIcon } from "../../../assets/icons/Add.svg"


// STYLED COMPONENTS
const SessionCard = styled(Box)`
  padding: 0!important;
  margin-bottom: 15px;
`

const SessionHeader = styled.div`
  padding: 23px 10px;
`
const SessionFooter = styled.div`
  padding: 16px 23px;
`

const SessionTitle = styled.div`
  gap: 8px;
  display: flex;
  align-items: center;
`

const ButtonAddSession = styled.div`
  align-items: center;
  display: flex;
  gap: 8px;
`

const ButtonAdd = styled(Button)`
  padding: 10px 12px;
`

export default function SessionCardView({
  handleAddLesson,
  children,
  dragHandleProps,
  ...otherProps
}) {
  return (
    <div>
      <SessionCard>
        <SessionHeader>
          <SessionTitle>
            <div {...dragHandleProps}>
              <HandleDragIcon />
            </div>
            <Typography>Session 1</Typography>
          </SessionTitle>
        </SessionHeader>
        <div>
          {children}
        </div>
        <SessionFooter>
          <ButtonAddSession>
            <ButtonAdd
              onClick={() => handleAddLesson()}
              primary
              inline
            >
              <AddIcon />
            </ButtonAdd>
            Add Lesson Material
          </ButtonAddSession>
        </SessionFooter>
      </SessionCard>
    </div>
  )
}