import React, { useContext } from "react";
import AlertContext from "./context/alert/alertContext";

function Alert(props) {
  const { alerts } = useContext(AlertContext);
  return (
    alerts.length > 0 &&
    alerts.map((alert) => <div key={alert.id}>{alert.message}</div>)
  );
}

export default Alert;
