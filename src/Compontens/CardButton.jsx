import React from "react";

function CardButton({ tagName, selected }) {
  const style = {
    HTML: { backgroundColor: "#e34c26", color:"#000000" },
    CSS: { backgroundColor: "#264de4", color:"#000000" },
    JavaScript: { backgroundColor: "#F0DB4F" , color:"#000000" },
    React: { backgroundColor: "#61DBFB", color:"#000000" },
    Node: { backgroundColor: "#3c873a", color:"#000000" },
    Express: { backgroundColor: "#68a063", color:"#000000" },
    // default : {backgroundColor:""},
  };
  return (
    <button
      className="px-1 py-1 text-xs font-bold leading-none text-white rounded focus:outline-none "
      type="button"
      style={selected ? style[tagName] : style.default}
    >
      {tagName}
    </button>
  );
}

export default CardButton;
