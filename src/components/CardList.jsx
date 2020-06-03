import React from "react";
import CalenderCard from "./CalenderCard";
import "./CardList.css";

const DayLabel = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

export default function CardList({ aggData }) {
  return (
    <div className="card-list-wrapper">
      {aggData.map((data, index) => (
        <CalenderCard
          key={DayLabel[index]}
          title={DayLabel[index]}
          list={data}
        />
      ))}
    </div>
  );
}
