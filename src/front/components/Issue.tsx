import React from 'react';

export function Issue(props : any) {

  return <div className="col-3"><div className="card" style={{marginBottom:"10px"}}>
            <div className="card-body">
            <h5 className="card-title">{props.item.title}</h5>
            <p className="card-text">{props.item.description}</p>
            <div className="btn-group" role="group" aria-label="Basic example">
  <button type="button" className="btn btn-primary">Pending</button>
  <button type="button" className="btn btn-success">Open</button>
  <button type="button" className="btn btn-danger">Closed</button>
</div>
          </div>
        </div>
        </div>
}
