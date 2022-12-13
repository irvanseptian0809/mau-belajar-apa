import React from "react"
import styled, { css } from "styled-components";
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

import { Modal } from "../../components/molecules"

import { ReactComponent as AddIcon } from "../../assets/icons/Add.svg"

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

export default function CourseView({
  newSession,
  sessionList,
  handleDropSession,
  handleAddSession,
  handleDropLesson,
  handleTitleSession,
  handleDeleteSession,
  handleAddLesson,
  handleEditLesson,
  handleDeleteLesson,
}) {
  return (
    <>
      <Modal />
      <Header title="Event" />
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
                          handleAddLesson={() => handleAddLesson(item.id)}
                        >
                          <DragDropContext onDragEnd={(e) => handleDropLesson(e, item.id)}>
                            <Droppable droppableId="drop-lesson">
                              {(providedLesson) => (
                                <div
                                  {...providedLesson.droppableProps}
                                  ref={providedLesson.innerRef}
                                >
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
                                            handleEditLesson={() => handleEditLesson(lesson.id)}
                                            handleDeleteLesson={() => handleDeleteLesson(lesson.id, item.id)}
                                          />
                                        </div>
                                      )}
                                    </Draggable>
                                  ))}
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
            <AddIcon />
            Add Session
          </ButtonAddSession>
        </Button>
      </CourseFooter>
    </>
  )
}
