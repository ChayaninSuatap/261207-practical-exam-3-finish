import { useContext } from "react";
import LanguageContext from "./LanguageContext";

export default function PersonCard(props) {
  const language = useContext(LanguageContext);
  return (
    <div>
      <table className="table is-bordered mb-3">
        <tbody>
          {language.code === "ENG" && (
            <tr>
              <th>Name</th>
              <th>Gender</th>
              <th>Age</th>
            </tr>
          )}

          {language.code === "TH" && (
            <tr>
              <th>ชื่อ</th>
              <th>เพศ</th>
              <th>อายุ</th>
            </tr>
          )}

          <tr>
            <td>{props.name}</td>
            <td>{props.gender}</td>
            <td>{props.age}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
