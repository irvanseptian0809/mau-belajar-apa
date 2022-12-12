import SessionCardView from "./SessionCardView";

export default function SessionCardContainer({
  ...otherProps
}) {

  const handleAddLesson = () => {

  }
  const props = {
    handleAddLesson,
    ...otherProps
  }
  return <SessionCardView {...props} />
}
