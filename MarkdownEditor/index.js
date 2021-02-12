import React from 'react';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import css from './style.css';
import path from 'path'

const ReactMarkdown = require('react-markdown') 

function MarkdownEditor({ file, write }) {
  console.log(file, write);

  const [text, setText] = useState('')

  useEffect(() => {
    (async () => {
      setText(await file.text());
    })();
  }, [file]);


  const handleTextChange = (e) => {
    console.log("file updated")
    setText(e.target.value)
  }

  const UpdateFile = (e) => {
    e.preventDefault();

    let newFile = new File([text],
      file.name,{
        type: 'text/markdown',
        lastUpdated: new Date(Date.now())
      })

      write(newFile)
  };

  return (
    <div className={css.editor}>
      <form onSubmit={UpdateFile}>
      <textarea name="text" value={text} rows="30" cols="60" onChange={handleTextChange}></textarea>
      <button type="submit"> Save </button>
    </form>
    <div className={css.preview}>
      <div className={css.title}>{path.basename(file.name)}</div>
      <div className={css.content}><ReactMarkdown source={text} /></div>
    </div>
    </div>
  );
}

MarkdownEditor.propTypes = {
  file: PropTypes.object,
  write: PropTypes.func
};

export default MarkdownEditor;
