import PersonTable from "./PersonTable";
import { useState, useEffect } from "react";

const studentId = 610631100;

function App() {
  const [inputName, setInputName] = useState("");
  const [inputGender, setInputGender] = useState("");
  const [inputAge, setInputAge] = useState("");
  const [persons, setPersons] = useState([]);

  //load locationStorage
  useEffect(() => {
    const persons = localStorage.getItem("persons");
    if (!persons) add("Chayanin Suatap " + studentId, "Male", "25");
    else setPersons(JSON.parse(persons));
  }, []);

  //add new person
  function add(name, gender, age) {
    const newPersons = [...persons,
    {
      name,
      gender,
      age
    }]
    setPersons(newPersons)
    localStorage.setItem('persons', JSON.stringify(newPersons))
  }

  return (
    <div className="card" style={{ width: 400 }}>
      <div className="card-content">

        <p className="is-4 title has-text-centered">Add Person</p>
        <div className="field">
          <label className="label">Name</label>
          <input
            className="input"
            type="text"
            placeholder="e.q John Smith"
            onChange={(e) => setInputName(e.target.value)}
          ></input>
        </div>

        <div className="field">
          <label className="label">Gender</label>
          <input
            className="input"
            type="text"
            placeholder="e.q Male"
            onChange={(e) => setInputGender(e.target.value)}
          ></input>
        </div>

        <div className="field">
          <label className="label">Age</label>
          <input
            className="input"
            type="text"
            placeholder="e.q Age"
            onChange={(e) => setInputAge(e.target.value)}
          ></input>
        </div>

        <button
          className="button is-primary is-fullwidth"
          onClick={() => add(inputName, inputGender, inputAge)}
        >
          Submit
          </button>

        <div className="mb-4"></div>

        <p className="is-4 title has-text-centered">Person List</p>
        {persons.map((x, i) => (
          <PersonTable {...x} key={i} />
        ))}
      </div>
    </div>
  );
}

export default App;
