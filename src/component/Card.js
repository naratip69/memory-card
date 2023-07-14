import React, { useState, useEffect } from "react";

export default function Card(props) {
  const { name, src, id } = props;
  const [isClick, setClick] = useState(false);

  return (
    <div className="card">
      <img src={src} />
      <h5>{name}</h5>
    </div>
  );
}
