import React, {useState} from "react";

export function Dialog(props: any) {

  return <div>
  <form action="/issue" method="POST">
  <div className="row mb-3">
    <div className="col-3">
    <input type="text" name="title" className="form-control" id="title" aria-describedby="issueTitle" placeholder="Title"/>
    </div>
    <div className="col-8">
    <input type="text" name="description" className="form-control" id="description" aria-describedby="issueDescription" placeholder="Description"/>
    </div>
    <div className="col-1">
    <button type="submit" className="btn btn-primary">Add</button>
    </div>
    </div>
  </form>
  </div>;

}
