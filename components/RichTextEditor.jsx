// components/RichTextEditor.js
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const RichTextEditor = ({ value, onChange }) => {
  
  return (
    <ReactQuill
      value={value}
      onChange={onChange}
      modules={RichTextEditor.modules}
      formats={RichTextEditor.formats}
      placeholder="Type your content here..."
    />
  );
};

RichTextEditor.modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, false] }],
    ['bold', 'italic', 'underline', 'strike', 'code-block',],
    [{ color: [] }, { background: [] }],
    [{ script: 'sub' }, { script: 'super' }],
    [{ list: 'ordered' }, { list: 'bullet' }],
    [{ indent: '-1' }, { indent: '+1' }],
    ['link', 'image'],
    ['clean'],
  ],
};

RichTextEditor.formats = [
  'header',
  'bold', 'italic', 'underline', 'strike', 'code-block',
  'color', 'background',
  'script',
  'list', 'ordered','bullet',
  'indent',
  'link', 'image',

];

export default RichTextEditor;
