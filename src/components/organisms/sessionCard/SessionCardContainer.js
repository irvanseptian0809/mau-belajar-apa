import SessionCardView from "./SessionCardView";

export default function SessionCardContainer({
  ...otherProps
}) {
  const props = {
    ...otherProps
  }
  return <SessionCardView {...props} />
}
