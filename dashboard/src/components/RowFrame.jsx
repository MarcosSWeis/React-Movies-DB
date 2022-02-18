import React from "react";

function RowFrame(props) {
  return (
    <tr>
      <th scope="row">{props.id}</th>
      <td>{props.title}</td>
      <td>{props.length}</td>
      <td>{props.rating}</td>
      <td>{props.genre}</td>
      <td>{props.awards}</td>
    </tr>
  );
}

export default RowFrame;
