import React from "react";

function Button({handleSelectTags,tagName, selected}) {
  const style = {
    HTML : {backgroundColor:"#e34c26"},
    CSS : {backgroundColor:"#264de4"},
    JavaScript : {backgroundColor:"#F0DB4F"},
    React : {backgroundColor:"#61DBFB"},
    Node : {backgroundColor:"#3c873a"},
    Express : {backgroundColor:"#68a063"},
    // default : {backgroundColor:""},
  }
  return (
    <button
      className="btn m-4 transition duration-600"
      style={selected ? style[tagName]: style.default }
      type="button"
      onClick={()=>{handleSelectTags(tagName)}}
    >
      {tagName}
    </button>
  );
}

export default Button;
