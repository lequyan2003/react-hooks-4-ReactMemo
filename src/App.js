import React, { useCallback, useState } from "react";
import ChildComponent from "./components/ChildComponent";

function NewComponent({ children }) {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>Outer Count: {count}</p>
      <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Add</button>
        {children}
      </div>
    </>
  );
}

// function Counter() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <p>Count: {count}</p>
//       <button onClick={() => setCount(count + 1)}>Add</button> 
//     </>
//   )
// }

function App({ viewCount }) {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('David');

  const getUser = useCallback(() => {
    return fetch('https://reqres.in/api/users');
  }, []);

  return (
    <>
      {/* <p>Outer Count: {count}</p>
      <div> */}
        {/* <Counter /> */}
        {/* <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Add</button> 
        <ChildComponent name={name} getUser={getUser} />
      </div> */}
      <NewComponent>
        <ChildComponent name={name} getUser={getUser} />
      </NewComponent>
    </>
  );
}

export default App;
