import React from "react";
import { useParams } from "react-router-dom";


function TutorialDetail() {
let { items } = useParams();
  return <div>this Detail tutorial {items}</div>;
}

export default TutorialDetail;
