import { useState, useEffect } from "react";
import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";

export default function App() {
  const defaultValues = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [values, setValues] = useState(() => {
    const savedValues = window.localStorage.getItem("saved-values");
    if (savedValues !== null) {
      try {
        return JSON.parse(savedValues);
      } catch (e) {
        console.error("Error parsing saved values:", e);
        return defaultValues;
      }
    }
    return defaultValues;
  });

  useEffect(() => {
    window.localStorage.setItem("saved-values", JSON.stringify(values));
  }, [values]);

  function update(key) {
    if (key === "reset") {
      setValues({ ...defaultValues });
    } else {
      setValues((prevValues) => ({
        ...prevValues,
        [key]: prevValues[key] + 1,
      }));
    }
  }

  const total = values.good + values.neutral + values.bad;
  const positiveFeedback =
    total > 0 ? Math.round((values.good / total) * 100) : 0;

  return (
    <>
      <Description />
      <Options update={update} totalFeedback={total} />

      {total === 0 ? (
        <Notification />
      ) : (
        <Feedback values={values} totalFeedback={total} />
      )}
      {total > 0 && <p>Positive Feedback: {positiveFeedback}%</p>}
    </>
  );
}
