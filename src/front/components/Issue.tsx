import React from "react";

const issueState = new Map();
issueState.set(0, { text: "Pending", color: "primary" });
issueState.set(1, { text: "Opened", color: "success" });
issueState.set(2, { text: "Closed", color: "danger" });

export function Issue(props: any) {
  let stateDetails: { text: string, color: string } = {
    text: "Unknown",
    color: "secondary",
  };
  if (props.item.state != null) {
    stateDetails = issueState.get(props.item.state);
  }
  return (
    <div className="col-12">
      <div className="card" style={{ marginBottom: "10px" }}>
        <div className="card-body">
          <div className="">
            <h5 className="card-title d-inline mr-3">{props.item.title}</h5>
            <span className={"d-inline badge badge-" + stateDetails.color}>
              {stateDetails.text}
            </span>
          </div>
          <p className="card-text">{props.item.description}</p>
          <div className="btn-group btn-group-sm" role="group" aria-label="Issue state">
            <a href={"issue/" + props.item._id + "/state/0"} className="btn btn-primary">Pending</a>
            <a href={"issue/" + props.item._id + "/state/1"} className="btn btn-success">Open</a>
            <a href={"issue/" + props.item._id + "/state/2"} className="btn btn-danger">Closed</a>
          </div>
        </div>
      </div>
    </div>
  );
}
