import React from "react";
import { useHistory } from "react-router-dom";
import './style.css';

const BackButton = () => {
  let history = useHistory();

  return <button id='back-btn' onClick={history.goBack}>&larr;</button>;
};

export { BackButton };
