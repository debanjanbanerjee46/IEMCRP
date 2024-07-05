import React from "react";

const Subitem = (props) => {
  const {sub}= props;
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>{sub.sub}</td>
            <td>{sub.marks}</td>
            <td>{sub.Grade}</td>
          </tr>
          
        </tbody>
      </table>
    </div>
  );
};

export default Subitem;
