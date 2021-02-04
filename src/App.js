import PersonTable from "./PersonTable";
import { useState } from "react";

function App() {
  const studentId = 610631100;
  const data = [
    {
      name: "Bob",
      gender: "male",
      age: "50"
    },
    {
      name: "Alice",
      gender: "male",
      age: "20"
    },
    {
      name: "Chayanin Suatap " + studentId,
      gender: "male",
      age: "25"
    }
  ];
  const [id, setId] = useState(studentId);
  return (
    <div class="ml-2">
      <h3 class="title is-3">Person List</h3>
      {data.map((x) => (
        <PersonTable {...x} key={x.name} />
      ))}

      <h3 class="title is-3">ID Counter</h3>
      <p>{id}</p>
      <button onClick={() => setId(id - 1)}>-</button>
      <button onClick={() => setId(studentId)}>reset</button>
      <button onClick={() => setId(id + 1)}>+</button>
    </div>
  );
}

export default App;
