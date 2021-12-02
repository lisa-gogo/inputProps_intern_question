import "./styles.css";
import { v4 as uuidv4 } from "uuid";

import React, { useEffect, useState } from "react";
// /Please write a simple React component that
// does the following: The component takes one
// prop named "input". There are three types of
//  input: 1. If the prop is a falsy value, return
//  a live-updating date and time (update every second)
//   in a div. Please pretty-format the date and time.
//   Use the native JavaScript Date object.
//   2. If the prop is an array, return a list of divs,
//   each containing one element of the array.
//   3. If the prop is anything else, return the value of
//    the prop in a div. A functional component using React
//    Hooks is preferred, though not required.

const list = {
  color: "blue"
};
export default function App({ input }) {
  if (input === false) return <UpdateTime />;
  if (Array.isArray(input)) {
    return (
      <div className="App">
        {input.map((e) => {
          return (
            <div key={uuidv4()} style={list}>
              {e}
            </div>
          );
        })}
      </div>
    );
  }
  return <div>{input}</div>;
}

const UpdateTime = () => {
  const [time, setTime] = useState(new Date(Date.now()).toLocaleString());

  useEffect(() => {
    const update = setInterval(
      () => setTime(new Date(Date.now()).toLocaleString()),
      1000
    );
    return () => clearInterval(update);
  }, []);

  return <>{time}</>;
};
