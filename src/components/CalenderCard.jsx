import React from "react";
import "./CalenderCard.css";
import { hashedTagColor, calColumn } from "../utils";

const getStyle = (length) => {
  const col = calColumn(length);
  return `repeat(${col} ,${170 / col / 10}rem)`;
};

const getInitials = (name) => {
  try {
    const [first, last] = name.split(" ");
    const initials = first[0] + last[0];
    return initials.toUpperCase();
  } catch {
    alert("Invalid name value");
  }
};

const getLabelText = (length) => {
  if (length === 0) return "No Birthdays";
  else if (length === 1) return "1 Birthday";
  else return `${length} Birthdays`;
};
const sortByAge = (list) => {
  return list.sort((l, r) => l.elapsedTime - r.elapsedTime);
};

export default function CalenderCard({ title, list }) {
  const length = list.length;

  return (
    <div className="card-wrapper">
      <div className="card">
        <div className="card-head">{title}</div>
        <div
          style={{
            gridTemplateColumns: getStyle(length),
            gridTemplateRows: getStyle(length),
            backgroundColor: length ? "" : "#dee4e6",
          }}
          className="card-body"
        >
          {sortByAge(list).map(({ name }) => (
            <span
              key={name}
              style={{ backgroundColor: hashedTagColor(getInitials(name)) }}
              className="card-item"
            >
              <span className="label">{getInitials(name)}</span>
            </span>
          ))}
        </div>
      </div>
      <div className="item-count">{getLabelText(length)}</div>
    </div>
  );
}
