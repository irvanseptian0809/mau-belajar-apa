import React, { useState } from "react";
import dayjs from "dayjs";

import CourseView from "./CourseView";

export default function CourseContainer() {
  const defaultSession = [];
  
  const [sessionList, setSessionList] = useState(defaultSession);
  const [newSession, setNewSession] = useState({});
  const [selectedLesson, setSelectedLesson] = useState({});

  const handleDropSession = (droppedItem) => {
    if (!droppedItem.destination) return;
    let updatedList = [...sessionList];
    const [reorderedItem] = updatedList.splice(droppedItem.source.index, 1);
    updatedList.splice(droppedItem.destination.index, 0, reorderedItem);
    setSessionList(updatedList);
  };

  const handleDropLesson = (droppedItem, sessionId) => {
    const updateSessionList = sessionList

    const sessionIndex = updateSessionList.findIndex((session => session.id === sessionId));
    const lessonList = sessionList[sessionIndex].lessons;
    
    if (!droppedItem.destination) return;
    let updatedList = [...lessonList];
    const [reorderedItem] = updatedList.splice(droppedItem.source.index, 1);
    updatedList.splice(droppedItem.destination.index, 0, reorderedItem);
    
    updateSessionList[sessionIndex].lessons = updatedList;
    setSessionList(updateSessionList);
  }

  const handleTitleSession = (title, sessionId) => {
    const updateSessionList = sessionList;

    const sessionIndex = updateSessionList.findIndex((session => session.id === sessionId));
    updateSessionList[sessionIndex].title = title;
    setSessionList([...updateSessionList]);
  }

  const handleDeleteSession = (sessionId) => {
    const sessionIndex = sessionList.findIndex((session => session.id === sessionId));
    let updatedList = [...sessionList];
    updatedList.splice(sessionIndex, 1);
    setSessionList([...updatedList]);
  }

  const handleAddSession = () => {
    const session = {
      id: `SES${dayjs().format('YYYYMMDDhhssSSS')}`,
      title: `Session ${sessionList.length+1}`,
      lessons: [],
    }

    setNewSession(session);
    let newSessionList = sessionList
    newSessionList.push(session)

    setSessionList([...newSessionList])
  }

  const handleUpdateLesson = (sessionId, data) => {
    const sessionIndex = sessionList.findIndex((session => session.id === sessionId));
    const lessonsList = sessionList[sessionIndex].lessons;

    const lessonIndex = lessonsList.findIndex((lesson => lesson.id === data.id));

    let updateLesson = sessionList[sessionIndex].lessons
    if (lessonIndex === -1) {
      updateLesson = [...updateLesson, data];
    } else {
      updateLesson[lessonIndex] = data;
    }

    let updateLessonList = sessionList;
    updateLessonList[sessionIndex].lessons = updateLesson;
    setSessionList([...updateLessonList]);
    setSelectedLesson({});
  }

  const handleEditLesson = (payload) => {
    setSelectedLesson(payload)
  }

  const handleDeleteLesson = (lessonId, sessionId) => {
    const sessionIndex = sessionList.findIndex((session => session.id === sessionId));
    let updatedList = [...sessionList];

    const lessons = updatedList[sessionIndex].lessons;
    const lessonIndex = lessons.findIndex((lesson => lesson.id === lessonId));
    let updatedListLessons = [...lessons];
    updatedListLessons.splice(lessonIndex, 1);
    updatedList[sessionIndex].lessons = updatedListLessons;
    setSessionList([...updatedList]);
  }

  const props = {
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
  }
  return <CourseView {...props} />
}