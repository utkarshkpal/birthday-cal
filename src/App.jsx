import React, { useState } from "react";
import "./App.css";
import CalenderList from "./components/CardList";
import { aggDataByDay } from "./utils";

const initData = [
  { name: "Tyrion Lannister", birthday: "12/02/2014" },
  { name: "Jamie Lannister", birthday: "13/08/2014" },
  { name: "Roose Bolton", birthday: "19/02/2014" },
  { name: "Arya Stark", birthday: "1/01/2013" },
  { name: "John Snow", birthday: "16/03/2012" },
  { name: "Sansod Clegane", birthday: "15/03/2012" },
  { name: "Ramsey Bolton", birthday: "18/05/2014" },
  { name: "Theon Greyjoy", birthday: "10/07/2015" },
  { name: "Khal Drogo", birthday: "19/08/2014" },
  { name: "Eddard STark", birthday: "21/09/2014" },
  { name: "Daenerys Targaryen", birthday: "5/09/2016" },
];

function App() {
  const [year, setYear] = useState(2014);
  const [data, setData] = useState(initData);

  const filterByYear = (data, year) => {
    return data.filter(({ birthday }) => {
      const [, , itemYear] = birthday.split("/");

      if (year == itemYear) return true;
    });
  };
  const filteredData = filterByYear(data, year);
  const aggData = aggDataByDay(filteredData);

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
