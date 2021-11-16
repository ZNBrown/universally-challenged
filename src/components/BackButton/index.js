import React from "react";
import { useHistory } from "react-router-dom";
import './style.css';

const BackButton = () => {
  let history = useHistory();

  return <div id='back-btn' onClick={history.goBack}>&larr;</div>;
};

export { BackButton };
