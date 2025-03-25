import css from "./Options.module.css";

export default function Options({ update, totalFeedback }) {
  return (
    <div id={css.buttons}>
      <button onClick={() => update("good")}>Good</button>
      <button onClick={() => update("neutral")}>Neutral</button>
      <button onClick={() => update("bad")}>Bad</button>
      {totalFeedback > 0 && (
        <button
          onClick={() => {
            return update("reset");
          }}
        >
          Reset
        </button>
      )}
    </div>
  );
}
