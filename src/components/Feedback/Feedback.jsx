import css from "./Feedback.module.css";

export default function Feedback({ values, totalFeedback }) {
  return (
    <div className={css.feedback}>
      <ul>
        <li>Good: {values.good}</li>
        <li>Neutral: {values.neutral}</li>
        <li>Bad: {values.bad}</li>
        <li>Total: {totalFeedback} </li>
      </ul>
    </div>
  );
}
