import React from "react";
import "./Result.css";
const Results = (props) => {
  return (
    <div className="users">
      <ul>
        {props.items.map((user) => {
          return (
            <li>
              {user.name} ({user.age} years old!)
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Results;
