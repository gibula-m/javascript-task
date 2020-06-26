import React, {useState} from "react";
import { Issue } from "../components/Issue";
import { Dialog } from '../components/Dialog';

export function MainPage(props: any) {
  return (
    <div className="container">
      <h2 className="d-inline mr-3">Issue Tracker</h2>
      <Dialog/>
      <div className="row">
        {props.items.map((element: any) => {
          return <Issue item={element} />;
        })}
      </div>
    </div>
  );
}
