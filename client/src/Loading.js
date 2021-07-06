import React, { Fragment } from "react";
import { Spinner } from "react-bootstrap";

function Loading() {
  return (
    <Fragment>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          height: "400px",
        }}
      >
        <Spinner
          style={{ color: "#8F00B9", width: "50px", height: "50px" }}
          animation="border"
        />
      </div>
    </Fragment>
  );
}

export default Loading;
