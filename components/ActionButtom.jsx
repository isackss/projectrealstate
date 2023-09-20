"use client";

const ActionButtom = ({ icon, action }) => {
  return (
    <button className="btn btn-outline-success" onClick={action}>
      <i className={icon}></i>
      {console.log(icon)}
    </button>
  );
};

export default ActionButtom;
