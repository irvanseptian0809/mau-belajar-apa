import { useEffect, useState } from "react";
import SessionCardView from "./SessionCardView";

export default function SessionCardContainer({
  isEditActive,
  ...otherProps
}) {
  const [isTitleEdit, setTitleEdit] = useState(false);

  useEffect(() => {
    setTitleEdit(true);
  }, [isEditActive]);

  const props = {
    isTitleEdit,
    handleTitleEdit: setTitleEdit,
    ...otherProps
  }
  return <SessionCardView {...props} />
}
