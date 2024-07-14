import { useState, useMemo } from "react";
import dynamic from "next/dynamic";
// import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


const ListEditor = () => {
  const [editorHtml, setEditorHtml] = useState('');
  const ReactQuill = useMemo(() => dynamic(() => import('react-quill'), { ssr: false }),[]);
  const modules = {
    toolbar: [
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    ],
  };
  const formats = [
    'list',
    'ordered',
    'bullet',
  ];

  const handleChange = (html) => {
    setEditorHtml(html);
  };

  console.log(editorHtml, 'editorHtml')

  return (
    <div>
      <ReactQuill
        theme="snow"
        modules={modules}
        formats={formats}
        value={editorHtml}
        onChange={handleChange}
      />
    </div>
  );
};

export default ListEditor;
