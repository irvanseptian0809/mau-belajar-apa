import { useEffect, useState } from "react";
import dayjs from "dayjs";

import SessionCardView from "./SessionCardView";

const defaultPayload = {
  id: `LES${dayjs().format('YYYYMMDDhhssSSS')}`,
  title: "",
  datetime: "",
  time: "",
  isDownloadable: true,
  isRequired: true,
  isPreviewable: true,
}

export default function SessionCardContainer({
  isEditActive,
  handleUpdateLesson,
  selectedLesson,
  ...otherProps
}) {
  const [isTitleEdit, setTitleEdit] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [payload, setPayload] = useState(defaultPayload);
  const [type, setType] = useState("Add");

  useEffect(() => {
    if (selectedLesson.id) {
      setIsModal(true);
      setPayload(selectedLesson);
      setType("Edit");
    } else {
      setPayload({
        ...defaultPayload,
        id: `LES${dayjs().format('YYYYMMDDhhssSSS')}`,
      });
    }
  }, [selectedLesson])

  useEffect(() => {
    setTitleEdit(true);
  }, [isEditActive]);

  const handlePayload = (data) => {
    const newPayload = {
      ...payload,
      ...data,
    };
    setPayload(newPayload);
  }

  const handleAddLesson = () => {
    setIsModal(true);
    setPayload({
      ...defaultPayload,
      id: `LES${dayjs().format('YYYYMMDDhhssSSS')}`,
    });
    setType("Add");
  }

  const handleSave = () => {
    handleUpdateLesson(payload);
    setIsModal(false);
    setType("Add");
    console.log(payload)
  }
 
  const props = {
    type,
    payload,
    isTitleEdit,
    isModal,
    handleTitleEdit: setTitleEdit,
    handleIsModal: setIsModal,
    handlePayload,
    handleAddLesson,
    handleSave,
    ...otherProps
  }
  return <SessionCardView {...props} />
}
