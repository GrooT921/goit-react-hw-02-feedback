export const App = () => {
  const state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  onClickGood () {
    console.log('click')
  }
  
  return (
    <>
      <div>
        <p>Please leave feedback</p>
        <button onClick={}>Good</button>
        <button>Neutral</button>
        <button>Bad</button>
      </div>
      <div>
        <p>Statistics</p>
        <ul>
          <li>Good: { state.good }</li>
          <li>Neutral: { state.good }</li>
          <li>Bad: { state.good }</li>
        </ul>
      </div>
    </>

  );
};
