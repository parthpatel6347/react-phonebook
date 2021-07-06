import React, { useContext } from "react";
import AlertContext from "./context/alert/alertContext";
import { ExclamationCircleIcon } from "@heroicons/react/outline";

function Alert(props) {
  const { alerts } = useContext(AlertContext);
  return (
    alerts.length > 0 && (
      <div>
        <p style={{ color: "#e53935", margin: 0, fontSize: "15px" }}>
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
