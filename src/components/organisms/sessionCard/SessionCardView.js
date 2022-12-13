import styled from "styled-components";

import {
  Box,
  Button,
  Input,
  Select,
  Typography,
} from "../../atoms"

import {
  Dropdown,
  Modal,
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

const TitleInput = styled(Typography)`
  text-align: left;
`
const InputForm = styled.div`
  display: flex;
`
const StyledInput = styled(Input)`
  border: 1px solid #b4b4b4;
  width: 100%;
  padding: 8px;
  border-radius: 5px;
  margin: 5px 0;
`

const InputContainer = styled.div`
  margin-top: 15px;
`

export default function SessionCardView({
  payload,
  isTitleEdit,
  isModal,
  title,
  children,
  type,
  dragHandleProps,
  handleTitleEdit,
  handleTitleSession,
  handleDeleteSession,
  handleAddLesson,
  handleIsModal,
  handlePayload,
  handleSave,
}) {
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
            <Typography>Add Lesson Material</Typography>
          </ButtonAddSession>
          <Modal
            isOpen={isModal}
            title={`${type} Lesson Material`}
            handleOpen={handleIsModal}
            handleSave={handleSave}
            handleCancel={() => handleIsModal(false)}
            isSaveDisabled={
              payload.title === "" ||
              payload.datetime === "" ||
              payload.time === ""
            }
          >
            <InputContainer>
              <TitleInput size={12}>Title Lesson Material</TitleInput>
              <InputForm>
                <StyledInput
                  value={payload.title}
                  placeholder="Title Lesson"
                  onChange={(e) => handlePayload({ title: e.target.value})}
                />
              </InputForm>
            </InputContainer>

            <InputContainer>
              <TitleInput size={12}>Datetime</TitleInput>
              <InputForm>
                <StyledInput
                  value={payload.datetime}
                  type="datetime-local"
                  placeholder="Datetime"
                  onChange={(e) => handlePayload({ datetime: e.target.value})}
                />
              </InputForm>
            </InputContainer>

            <InputContainer>
              <TitleInput size={12}>Duration</TitleInput>
              <InputForm>
                <StyledInput
                  value={payload.time}
                  type="time"
                  placeholder="Time"
                  onChange={(e) => handlePayload({ time: e.target.value})}
                />
              </InputForm>
            </InputContainer>
            
            <InputContainer>
              <TitleInput size={12}>Type Lesson</TitleInput>
              <InputForm>
                <Select
                  value={payload.type}
                  options={[
                    { label: "Video", value: 'video' },
                    { label: "Onsite", value: 'map' },
                  ]}
                  onChange={(e) => handlePayload({ type: e.target.value})}
                />
              </InputForm>
            </InputContainer>
            
            <InputContainer>
              <TitleInput size={12}>Downloadable</TitleInput>
              <InputForm>
                <Select
                  value={payload.isDownloadable}
                  options={[
                    { label: "Yes", value: true },
                    { label: "No", value: false },
                  ]}
                  onChange={(e) => handlePayload({ isDownloadable: e.target.value === 'true'})}
                />
              </InputForm>
            </InputContainer>
            
            <InputContainer>
              <TitleInput size={12}>Required</TitleInput>
              <InputForm>
                <Select
                  value={payload.isRequired}
                  options={[
                    { label: "Yes", value: true },
                    { label: "No", value: false },
                  ]}
                  onChange={(e) => handlePayload({ isRequired: e.target.value === 'true'})}
                />
              </InputForm>
            </InputContainer>
            
            <InputContainer>
              <TitleInput size={12}>Previewable</TitleInput>
              <InputForm>
                <Select
                  value={payload.isPreviewable}
                  options={[
                    { label: "Yes", value: true },
                    { label: "No", value: false },
                  ]}
                  onChange={(e) => handlePayload({ isPreviewable: e.target.value === 'true'})}
                />
              </InputForm>
            </InputContainer>
          </Modal>
        </SessionFooter>
      </SessionCard>
    </div>
  )
}