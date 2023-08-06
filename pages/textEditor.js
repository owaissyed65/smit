// pages/texteditor.js
import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

const DynamicRichTextEditor = dynamic(
  () => import("../components/RichTextEditor"),
  {
    ssr: false,
  }
);

const TextEditor = () => {
  const [editorValue, setEditorValue] = useState("");
  const ref = useRef(null);

  // useEffect(()=>{
  // ref.current.innerHTML = editorValue;
  // },[ref.current?.innerHTML])

  const handleEditorChange = (value) => {
    setEditorValue(value);
  };

  const handleSave = () => {
    // Perform your save logic here, such as saving the editorValue to a database
    console.log("Content saved:", editorValue);
  };

  return (
    <div>
      <h1>Text Editor</h1>
      <DynamicRichTextEditor
        value={editorValue}
        onChange={handleEditorChange}
      />
      <button onClick={handleSave}>Save</button>
      <div dangerouslySetInnerHTML={{__html:editorValue}}></div>
    </div>
  );
};

export default TextEditor;
