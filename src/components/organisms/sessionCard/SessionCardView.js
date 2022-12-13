import styled from "styled-components";

import {
  Box,
  Button,
  Input,
  Typography,
} from "../../atoms"
import {
  Dropdown
} from "../../molecules"

// ICONS
import { ReactComponent as AddIcon } from "../../../assets/icons/Add.svg"
import { ReactComponent as Edit } from "../../../assets/icons/Edit.svg"
import { ReactComponent as HandleDragIcon } from "../../../assets/icons/HandleDrag.svg"
import { ReactComponent as HorizontalOptionIcon } from "../../../assets/icons/HorizontalOption.svg"


// STYLED COMPONENTS
const SessionCard = styled(Box)`
  padding: 0!important;
  margin-bottom: 15px;
`

const SessionHeader = styled.div`
  padding: 23px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const SessionFooter = styled.div`
  padding: 16px 23px;
  margin-top: 40px;
`

const SessionTitle = styled.div`
  width: 100%;
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

const EditIcon = styled(Edit)`
  cursor: pointer;
`

const ButtonOption = styled(Button)`
  padding: 10px 20px;
  width: 100%;
  text-align: left!important;
  &:hover {
    background: #f4f4f4;
  }
`

export default function SessionCardView({
  isTitleEdit,
  title,
  children,
  dragHandleProps,
  handleAddLesson,
  handleTitleEdit,
  handleTitleSession,
  handleDeleteSession,
}) {
  console.log(isTitleEdit)
  return (
    <div>
      <SessionCard>
        <SessionHeader>
          <SessionTitle>
            <div {...dragHandleProps}>
              <HandleDragIcon />
            </div>
            {isTitleEdit ? (
              <Input
                autoFocus
                placeholder="Masukan title session"
                onBlur={() => handleTitleEdit(false)}
                onChange={(e) => handleTitleSession(e.target.value)}
                value={title}
              />
            ) : (
              <Typography onClick={() => handleTitleEdit(true)}>{title}</Typography>
            )}
            {!isTitleEdit && <EditIcon onClick={() => handleTitleEdit(true)}/>}
          </SessionTitle>
          <Dropdown label={<HorizontalOptionIcon />}>
            <ButtonOption onClick={handleDeleteSession}>Delete</ButtonOption>
          </Dropdown>
        </SessionHeader>
        <div>
          {children}
        </div>
        <SessionFooter>
          <ButtonAddSession>
            <ButtonAdd
              onClick={handleAddLesson}
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