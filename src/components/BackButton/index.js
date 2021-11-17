import React from "react";
import { useHistory } from "react-router-dom";
import './style.css';

const BackButton = () => {
  let history = useHistory();

  return <div aria-label='back button' id='back-btn' onClick={history.goBack}>&larr;</div>;
};

export { BackButton };
