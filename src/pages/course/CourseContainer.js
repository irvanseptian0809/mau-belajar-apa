import React, { useState, useEffect } from "react";
import dayjs from "dayjs"

import CourseView from "./CourseView";

export default function CourseContainer() {
  const defaultSession = [];
  // React state to track order of items
  const [sessionList, setSessionList] = useState(defaultSession);
  const [newSession, setNewSession] = useState({});

  // Function to update list on drop
  const handleDropSession = (droppedItem) => {
    // Ignore drop outside droppable container
    if (!droppedItem.destination) return;
    let updatedList = [...sessionList];
    // Remove dragged item
    const [reorderedItem] = updatedList.splice(droppedItem.source.index, 1);
    // Add dropped item
    updatedList.splice(droppedItem.destination.index, 0, reorderedItem);
    // Update State
    setSessionList(updatedList);
  };

  const handleDropLesson = (droppedItem, sessionId) => {
    const updateSessionList = sessionList

    const sessionIndex = updateSessionList.findIndex((session => session.id == sessionId));
    const lessonList = sessionList[sessionIndex].lessons;
    // Ignore drop outside droppable container
    if (!droppedItem.destination) return;
    let updatedList = [...lessonList];
    // Remove dragged item
    const [reorderedItem] = updatedList.splice(droppedItem.source.index, 1);
    // Add dropped item
    updatedList.splice(droppedItem.destination.index, 0, reorderedItem);
    // Update State
    updateSessionList[sessionIndex].lessons = updatedList;
    setSessionList(updateSessionList);
  }

  const handleTitleSession = (title, sessionId) => {
    console.log('title', title);
    const updateSessionList = sessionList;

    const sessionIndex = updateSessionList.findIndex((session => session.id == sessionId));
    updateSessionList[sessionIndex].title = title;
    setSessionList([...updateSessionList]);
  }

  const handleDeleteSession = (sessionId) => {
    const sessionIndex = sessionList.findIndex((session => session.id == sessionId));
    const lessonList = sessionList[sessionIndex].lessons;
    let updatedList = [...sessionList];
    updatedList.splice(sessionIndex, 1);
    setSessionList([...updatedList]);
  }

  const handleAddSession = () => {
    const session = {
      id: `SES${dayjs().format('YYYYMMDDhhssSSS')}`,
      title: `Session ${sessionList.length+1}`,
      lessons: [
        {
          id: `SES${dayjs().format('YYYYMMDDhhssSSS')}1`,
          title: `Lesson 1`,
          type: 'Video',
          time: '24 Oktober 2021, 16:30',
          duration: '06:30 Min',
          isDownloadable: true,
        },

        {
          id: `SES${dayjs().format('YYYYMMDDhhssSSS')}`,
          title: `Lesson 2`,
          type: 'Video',
          time: '24 Oktober 2021, 16:30',
          duration: '06:30 Min',
          isDownloadable: true,
        },

        {
          id: `SES${dayjs().format('YYYYMMDDhhssSSS')}3`,
          title: `Lesson 5`,
          type: 'Video',
          time: '24 Oktober 2021, 16:30',
          duration: '06:30 Min',
          isDownloadable: true,
        }
      ],
    }

    setNewSession(session);
    let newSessionList = sessionList
    newSessionList.push(session)

    setSessionList([...newSessionList])
    console.log('newSessionList', newSessionList)
  }

  const handleAddLesson = (sessionId) => {
    const lesson = {
      id: `LES${dayjs().format('YYYYMMDDhhssSSS')}`,
      title: `Lesson Tittle`,
      type: 'Video',
      time: '24 Oktober 2021, 16:30',
      duration: '06:30 Min',
      isDownloadable: true,
    }
    const sessionIndex = sessionList.findIndex((session => session.id == sessionId));
    const newLesson = [...sessionList[sessionIndex].lessons, lesson];

    let updateLessonList = sessionList;
    updateLessonList[sessionIndex].lessons = newLesson;
    setSessionList([...updateLessonList]);
  }

  useEffect(() => {

    console.log('sessionList', sessionList)
  }, [sessionList])

  const props = {
    newSession,
    sessionList,
    handleDropSession,
    handleAddSession,
    handleDropLesson,
    handleTitleSession,
    handleDeleteSession,
    handleAddLesson,
  }
  return <CourseView {...props} />
}