import React, { useState } from "react";
import "./App.css";
import CalenderList from "./components/CardList";
import { aggDataByDay } from "./utils";

const initData = [
  { name: "Tyrion Lannister", birthday: "12/02/2014" },
  { name: "Jamie Lannister", birthday: "13/08/2014" },
  { name: "Arya Stark", birthday: "1/01/2013" },
  { name: "John Snow", birthday: "16/03/2012" },
  { name: "Sansod Clegane", birthday: "15/03/2012" },
  { name: "Ramsey Bolton", birthday: "18/05/2014" },
  { name: "Theon Greyjoy", birthday: "10/07/2015" },
  { name: "Khal Drogo", birthday: "19/08/2014" },
  { name: "Eddard STark", birthday: "21/09/2014" },
  { name: "Daenerys Targaryen", birthday: "5/09/2016" },
  { name: "Cersei Lannister", birthday: "24/09/1993" },
  { name: "Rob Stark", birthday: "29/02/2020" },
];

function App() {
  const [year, setYear] = useState(2020);
  const [data, setData] = useState(initData);

  const aggData = aggDataByDay(data, year);

  const handleSubmit = (event) => {
    event.preventDefault();
    const { code, year } = event.target;
    setYear(Number(year.value));
    setData(JSON.parse(code.value));
  };

  return (
    <div className="App">
      <CalenderList aggData={aggData} />
      <section>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <span className="col">
              <textarea
                defaultValue={JSON.stringify(data)}
                name="code"
                rows="30"
                cols="50"
              />
            </span>
            <span className="col col-right">
              <div className="head">Year</div>
              <input
                maxLength="4"
                defaultValue={year}
                name="year"
                type="number"
              />
              <div>
                <button type="submit">Update</button>
              </div>
            </span>
          </div>
        </form>
      </section>
    </div>
  );
}

export default App;
