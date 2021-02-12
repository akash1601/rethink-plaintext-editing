
class FileHandler {
  constructor(){
    this.text = {}
    this.text.guide = `The objective is to significantly improve this file browser. Features to think about include: a text editor, markdown and code previews, or file changes persisting across reloads.
  
    Install any npm packages or use any third party code you'd like, but please make sure it is clear when you do so.
    
    Once complete, send us a forked GitHub repo link.
    
    Thanks for trying our challenge!
    
    - Rethink Engineering
    `

    this.text.plain = 'Just some text looking for an editor'

    this.text.water = 'Increasing water scarcity is an extremely dangerous symptom of a warming planet. The World Health Organization estimates that half of the global population will live in water-stressed areas by 2025. In 2008, the CEO of DOW Chemical said, “Water is the oil of the 21st century.” There have been 9 major conflicts over oil since 1932.'
    
    this.text.fancy = `# Some Markdown that could be rendered and HTML

     The *quick* brown fox, jumped **over** the lazy [dog]
    
    (https://en.wikipedia.org/wiki/Dog).`
    this.text.javascript = `import { useState, useRef, useEffect } from 'react';

    // From: https://blog.castiel.me/posts/2019-02-19-react-hooks-get-current-state-back-to-the-future/
    
    export default initialValue => {
      const [state, setState] = useState(initialValue);
      const stateRef = useRef(state);
      useEffect(() => {
        stateRef.current = state;
      }, [state]);
      return [state, stateRef, setState];
    };`
    this.text.json = `{
      "name" : "Admin",
      "email" : "admin@neptune.com",
      "rights" : [ "admin", "editor", "contributor" ]
  }`

    this.lastModified = {}
    this.lastModified.guide = new Date('2020-01-05T16:39:00')
    this.lastModified.plain = new Date('1995-12-17T03:24:00')
    this.lastModified.water = new Date('1998-12-17T04:24:00')
    this.lastModified.fancy = new Date('2018-09-14T09:32:17')
    this.lastModified.javascript = new Date('2019-04-01T12:15:01')
    this.lastModified.json = new Date('2011-07-29T16:01:35')
  }

  getfileText = (file) => {
    return this.text[file];
  }

  setFileText = (file, text) => {
    this.text[file] = text
  }

  getLastModifiedDate = (file) => {
    return this.lastModified[file]
  }

  setLastModifiedDate = (file, date) => {
    this.lastModified[file] = date
  }

}

var fileHandler = new FileHandler()
export function listFiles() {
  
  const guide = new File(
    [
      fileHandler.getfileText('guide')
    ],
    '/README.txt',
    {
      type: 'text/plain',
      lastModified: fileHandler.getLastModifiedDate('guide')
    }
  );
  

  const plain = new File(
    [fileHandler.getfileText('plain')],
    '/plain.txt',
    {
      type: 'text/plain',
      lastModified: fileHandler.getLastModifiedDate('plain')
    }
  );

  const water = new File(
    [
      fileHandler.getfileText('water')
    ],
    '/water.txt',
    {
      type: 'text/plain',
      lastModified: fileHandler.getLastModifiedDate('water')
    }
  );

  // Here is a markdown file
  const fancy = new File(
    [
      fileHandler.getfileText('fancy')
    ],
    '/fancy.md',
    {
      type: 'text/markdown',
      lastModified: fileHandler.getLastModifiedDate('fancy')
    }
  );

  const javascript = new File(
    [
      fileHandler.getfileText('javascript')
    ],
    '/use-ref-state.js',
    {
      type: 'text/javascript',
      lastModified: fileHandler.getLastModifiedDate('javascript')
    }
  );

  const json = new File(
    [
      fileHandler.getfileText('json')
    ],
    '/document.json',
    {
      type: 'application/json',
      lastModified: fileHandler.getLastModifiedDate('json')
    }
  );

  return [guide, plain, water, fancy, javascript, json];
}

export function newUpdateFile(filename, file) {
  fileHandler.setFileText(filename, file.text())
  fileHandler.setLastModifiedDate(file.lastModified);
}