import React, { useContext } from "react";
import AlertContext from "./context/alert/alertContext";
import { ExclamationCircleIcon } from "@heroicons/react/outline";
import "./styles/Alert.css";

function Alert(props) {
  const { alerts } = useContext(AlertContext);
  return (
    alerts.length > 0 && (
      <div className="alert-container">
        <p>
          <ExclamationCircleIcon
            style={{ width: "20px", marginRight: "5px" }}
          />
          {alerts[0].message}
        </p>
      </div>
    )
  );
}

export default Alert;
