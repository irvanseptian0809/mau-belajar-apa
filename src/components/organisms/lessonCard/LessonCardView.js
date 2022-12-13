import styled from "styled-components";
import dayjs from "dayjs";

import {
  Button,
  Typography,
} from "../../atoms"
import {
  Dropdown,
} from "../../molecules"

// ICONS
import { ReactComponent as HandleDragIcon } from "../../../assets/icons/HandleDrag.svg"
import { ReactComponent as VideoIcon } from "../../../assets/icons/Video.svg"
import { ReactComponent as MapIcon } from "../../../assets/icons/Map.svg"
import { ReactComponent as TimeIcon } from "../../../assets/icons/Time.svg"
import { ReactComponent as DownloadIcon } from "../../../assets/icons/Download.svg"
import { ReactComponent as VerticalOptionIcon} from "../../../assets/icons/VerticalOption.svg"


// STYLED COMPONENTS
const LessonCard = styled.div`
  padding: 0!important;
  margin: 0 16px;
  display: flex;
  justify-content: space-between;
  &:hover {
    background: #FBFAFF;
  }
  @media (max-width: 768px) {
    display: block;
  }
`

const FlexCenter = styled.div`
gap: 15px;
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    margin-bottom: 7px;
  }
`

const LessonLeftSection = styled.div`
  padding: 15px 7px;
  gap: 8px;
  display: flex;
  align-items: center;
`
const LessonRightSection = styled.div`
  padding: 15px 7px;
  gap: 8px;
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    display: block;
  }
`

const TextRequired = styled(Typography)`
  border-left: 1px solid #DFE5EE;
  padding-left: 8px;
`

const Dot = styled.span`
  display: block;
  height: 7px;
  width: 7px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  margin: 0 10px;
  @media (max-width: 768px) {
    display: none;
  }
`

const ButtonOption = styled(Button)`
  padding: 10px 20px;
  width: 100%;
  text-align: left!important;
  &:hover {
    background: #f4f4f4;
  }
`

export default function LessonCardView({
  data,
  dragHandleProps,
  handleEditLesson,
  handleDeleteLesson,
}) {
  return (
    <div>
      <LessonCard>
        <LessonLeftSection>
          <div {...dragHandleProps}>
            <HandleDragIcon />
          </div>
          {data.type === 'video' ? (
            <VideoIcon />
          ) : (
            <MapIcon />
          )}
          <Typography>{data.title}</Typography>
          {data.isRequired && <TextRequired primary weight={600}>Required</TextRequired>}
          {data.isPreviewable && <><Dot/><Typography color="#8189A2">Previewable</Typography></>}
        </LessonLeftSection>
        <LessonRightSection>
          <FlexCenter>
            <TimeIcon />
            <Typography>{dayjs(data.datetime).format('DD MMMM YYYY, hh:mm')}</Typography>
            <Dot/>
          </FlexCenter>

          <FlexCenter>
            <TimeIcon />
            <Typography>{data.time}</Typography>
          </FlexCenter>

          {data.isDownloadable && (
            <FlexCenter>
              <Dot/>
              <DownloadIcon />
              <Typography>Downloadable</Typography>
            </FlexCenter>
          )}
          <Dropdown label={<VerticalOptionIcon />}>
            <ButtonOption onClick={handleEditLesson}>Edit</ButtonOption>
            <ButtonOption onClick={handleDeleteLesson}>Delete</ButtonOption>
          </Dropdown>
        </LessonRightSection>
      </LessonCard>
    </div>
  )
}