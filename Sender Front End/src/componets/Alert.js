import React from "react";

const Alert = (props) => {

  return (
  props.alert && <div className={`alert alert-${props.alert.type}  alert-dismissible fade show` } role="alert">
      <strong>{props.alert.type}</strong> : {props.alert.msg}
      <span
        type="button"
        className="float-end"
      >
     </span>
    </div>
  );
};

export default Alert;
