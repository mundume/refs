import "./styles.css";
import { useRef, useEffect, useReducer } from "react";

const countReducer = (state, action) => {
  switch (action.type) {
    case "Add":

    case "Update":
      return { ...state, initialValue: action.payload };

    default:
      return state;
  }
};

export default function App() {
  const initialState = { initialValue: "" };
  const [state, dispatch] = useReducer(countReducer, initialState);

  const inputRef = useRef(state.initialValue);
  const prevRef = useRef("");
  const countRef = useRef(1);

  const handleChange = (e) => {
    inputRef.current = e.target.value;
    dispatch({
      type: "Update",
      payload: inputRef.current
    });
  };

  useEffect(() => {}, [state.initialValue]);

  const handleClick = () => {
    dispatch({
      type: "Add"
    });
  };

  return (
    <div className="App">
      <h1>Renders : {inputRef.current}</h1>
      <input
        type="text"
        placeholder="joto"
        style={{ padding: "5px " }}
        value={inputRef.current}
        onChange={handleChange}
        ref={inputRef}
      />
      <input type="text" placeholder="" />

      <button onClick={handleClick}>click</button>
      <h1>{countRef.current}</h1>
      <h1>{prevRef.current}</h1>
    </div>
  );
}
