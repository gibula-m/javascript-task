import React from "react";
import { Issue } from "../components/Issue";

export function MainPage(props: any) {
  return (
    <div className="container">
      <h2>Issue Tracker</h2>
      <div className="row">
        {props.items.map((element: any) => {
          return <Issue item={element} />;
        })}
      </div>
    </div>
  );
}
