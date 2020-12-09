import React, { useState, useEffect, useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'start':
      if (parseInt(state.input) && state.input.length === 4) {
        return { ...state, start: true };
      }
      return state;
    case 'stop':
      return { ...state, start: false };
    case 'inputChange':
      return { ...state, ...action.payload };
  }
}

const Toto = (props) => {
  const [state, dispatch] = useReducer(reducer, { start: false, input: '' });
  const [outputNums, setOutputNums] = useState([]);

  useEffect(() => {
    if (state.start) {
      const intervalId = setInterval(() => {
        const randomNum = Math.floor(Math.random() * 10000);
        setOutputNums((state) => [...state, randomNum]);
        if (randomNum === state.input) {
          clearInterval(intervalId);
        }
      }, 1000);
      return () => {
        clearInterval(intervalId);
      };
    }
  }, [state]);

  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, [outputNums]);

  return (
    <div>
      <form className="">
        <div>
          <label htmlFor="num">Number</label>
          <input
            type="text"
            name="num"
            className="mx-2 p-1 border-2 border-primary"
            value={state.input}
            onChange={(event) =>
              dispatch({
                type: 'inputChange',
                payload: { input: event.target.value },
              })
            }
          />
        </div>
        <button
          type="button"
          className="bg-primary rounded py-2 px-6"
          onClick={() => dispatch({ type: 'start' })}
        >
          Go
        </button>
      </form>
      {outputNums.map((num, index) => (
        <div key={index}>
          {index + 1}: {num}
        </div>
      ))}
      <button
        type="button"
        className="bg-primary rounded py-2 px-6"
        onClick={() => dispatch({ type: 'stop' })}
      >
        Stop
      </button>
    </div>
  );
};

export default Toto;
