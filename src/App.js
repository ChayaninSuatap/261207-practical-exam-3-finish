import PersonTable from "./PersonTable";
import LanguageContext, { languages } from "./LanguageContext";
import { useState, useEffect } from "react";

const studentId = 610631100;

function App() {
  const [inputName, setInputName] = useState("");
  const [inputGender, setInputGender] = useState("");
  const [inputAge, setInputAge] = useState("");

  useEffect(() => {
    const persons = localStorage.getItem("persons");
    if (!persons) add("Chayanin Suatap " + studentId, "Male", "25");
    else setPersons(JSON.parse(persons));
  }, []);

  const [persons, setPersons] = useState([]);

  function add(name, gender, age) {
    setPersons([
      ...persons,
      {
        name,
        gender,
        age
      }
    ]);
    //localStorage.setItem('persons', JSON.stringify(persons))
  }

  return (
    <LanguageContext.Provider value={languages.thai}>
      <div className="card" style={{ width: 400 }}>
        <div className="card-content">
          <p className="is-4 title has-text-centered">Add Person</p>
          <div className="field">
            <label className="label">Name</label>
            <p className="control">
              <input
                className="input"
                type="text"
                placeholder="e.q John Smith"
                onChange={(e) => setInputName(e.target.value)}
              ></input>
            </p>
          </div>

          <div className="field">
            <label className="label">Gender</label>
            <p className="control">
              <input
                className="input"
                type="text"
                placeholder="e.q Male"
                onChange={(e) => setInputGender(e.target.value)}
              ></input>
            </p>
          </div>

          <div className="field">
            <label className="label">Age</label>
            <p className="control">
              <input
                className="input"
                type="text"
                placeholder="e.q Age"
                onChange={(e) => setInputAge(e.target.value)}
              ></input>
            </p>
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
    </LanguageContext.Provider>
  );
}

export default App;
