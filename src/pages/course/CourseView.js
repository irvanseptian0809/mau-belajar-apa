import React from "react"
import styled from "styled-components";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import {
  Box,
  Button,
  Typography,
} from "../../components/atoms"

import {
  Header,
  LessonCard,
  SessionCard,
} from "../../components/organisms"

import {
  Empty,
  Modal,
} from "../../components/molecules"

import { ReactComponent as AddIcon } from "../../assets/icons/Add.svg"
import { ReactComponent as EyeIcon } from "../../assets/icons/Eye.svg"

const CourseBody = styled.div`
  max-width: 1300px;
  margin: auto;
  @media (max-width: 768px) {
    margin: 0px 15px;
  }
`

const CourseFooter = styled.div`
  max-width: 1300px;
  margin: auto;
  text-align: right;
  @media (max-width: 768px) {
    margin: 0px 15px;
  }
`

const CourseEvent = styled(Box)`
  margin: 46px 0 27px 0;
`

const ButtonAddSession = styled.div`
  align-items: center;
  display: flex;
  gap: 8px;
`

const ButtonPreview = styled(Button)`
  align-items: center;
  display: flex;
  gap: 8px;
`

const CourseHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1300px;
  margin: auto;
  margin-top: 50px;
  @media (max-width: 768px) {
    margin: 0px 15px;
    display: block;
  }
`

const CourseHeaderInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  @media (max-width: 768px) {
    display: block;
    margin-bottom: 15px;
  }
`

export default function CourseView({
  selectedLesson,
  newSession,
  sessionList,
  handleDropSession,
  handleAddSession,
  handleDropLesson,
  handleTitleSession,
  handleDeleteSession,
  handleUpdateLesson,
  handleEditLesson,
  handleDeleteLesson,
}) {
  return (
    <>
      <Modal />
      <Header title="Event" />
      <CourseHeader>
        <CourseHeaderInfo>
          <Typography size={32} weight={500}>Belajar dan praktek cinematic videography</Typography>
          <Typography size={12} weight={500} color="#8189A2">Last edited 18 October 2021 | 13:23</Typography>
        </CourseHeaderInfo>
        <ButtonPreview primary outlined>
          <EyeIcon /> Preview
        </ButtonPreview>
      </CourseHeader>
      <CourseBody>
        <CourseEvent>
          <Typography>Event Schedule: 14 Desember 2022, 16:30</Typography>
        </CourseEvent>
        <DragDropContext onDragEnd={handleDropSession}>
          <Droppable droppableId="drop-session">
            {(provided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {sessionList.length === 0 ? (
                  <Empty>
                    <Typography size={24} weight={600}>Empty Session</Typography>
                    <Typography>Please add some session to create event.</Typography>
                  </Empty>
                ) : (
                  <>
                    {sessionList.map((item, indexSession) => (
                      <Draggable
                        key={item.id}
                        draggableId={item.id}
                        index={indexSession}
                      >
                        {(provided) => (
                          <div 
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                          >
                            <SessionCard
                              title={item.title}
                              dragHandleProps={provided.dragHandleProps}
                              handleTitleSession={(e) => handleTitleSession(e, item.id)}
                              isEditActive={newSession.id === item.id}
                              handleDeleteSession={() => handleDeleteSession(item.id)}
                              handleUpdateLesson={(e) => handleUpdateLesson(item.id, e)}
                              selectedLesson={selectedLesson}
                            >
                              <DragDropContext onDragEnd={(e) => handleDropLesson(e, item.id)}>
                                <Droppable droppableId="drop-lesson">
                                  {(providedLesson) => (
                                    <div
                                      {...providedLesson.droppableProps}
                                      ref={providedLesson.innerRef}
                                    >
                                      {item.lessons.length === 0 ? (
                                        <Empty>
                                          <Typography size={24} weight={600}>Empty Lesson</Typography>
                                          <Typography>Please add some lesson into session to create event.</Typography>
                                        </Empty>
                                      ) : (
                                        <>
                                          {item.lessons.map((lesson, indexLesson) => (
                                            <Draggable
                                              key={lesson.id}
                                              draggableId={lesson.id}
                                              index={indexLesson}
                                            >
                                              {(providedLesson) => (
                                                <div 
                                                  ref={providedLesson.innerRef}
                                                  {...providedLesson.draggableProps}
                                                >
                                                  <LessonCard
                                                    data={lesson}
                                                    dragHandleProps={providedLesson.dragHandleProps}
                                                    handleEditLesson={() => handleEditLesson(lesson)}
                                                    handleDeleteLesson={() => handleDeleteLesson(lesson.id, item.id)}
                                                  />
                                                </div>
                                              )}
                                            </Draggable>
                                          ))}
                                        </>
                                      )}
                                      {providedLesson.placeholder}
                                    </div>
                                  )}
                                </Droppable>
                              </DragDropContext>
                            </SessionCard>
                          </div>
                        )}
                      </Draggable>
                    ))}
                  </>
                )}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </CourseBody>
      <CourseFooter>
        <Button
          onClick={() => handleAddSession()}
          primary
          inline
        >
          <ButtonAddSession>
            <AddIcon /> Add Session
          </ButtonAddSession>
        </Button>
      </CourseFooter>
    </>
  )
}
