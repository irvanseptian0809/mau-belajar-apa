import LessonCardView from "./LessonCardView";

export default function LessonCardContainer({
  ...otherProps
}) {
  const props = {
    ...otherProps
  }
  return <LessonCardView {...props} />
}