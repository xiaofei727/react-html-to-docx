import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// HTML TO DOCX
import * as fs from 'fs-web';
import htmlDocx from 'html-docx-js/dist/html-docx';
import { saveAs } from 'file-saver';
import juice from 'juice';
import axios from 'axios';

class App extends Component {

  constructor(props){
    super(props);
    this.docxToHTML = this.docxToHTML.bind(this);
  }

  docxToHTML(){
    var contentDocument = document.getElementsByClassName('App-header');
    var charSet = ' '
    var content = charSet + contentDocument[0].outerHTML;
  
    // fs.readFile('./src/App.css')
    //   .then(function(data){
    //     console.log(data);
    //     content = juice.inlineContent(content, data);
    //     var converted = htmlDocx.asBlob(content);
    //     saveAs(converted, 'test.docx');
    //   })
    //   .catch(error => console.log(error));

    var css = `
    .tableBox {
      text-align: center;
      width: 800px;
      
    }
    
    .mytable{
      border-spacing: 0px;
      margin: 0 auto;
    }
    
    
    .mytable thead {
      background-color: rgb(226, 223, 223);
      color : red;
    }
    
    .mytable thead tr th{
      border-bottom: 3px solid black;
      height: 50px;
      vertical-align: middle;
    }
    
    .mytable tbody tr td{
      border-bottom: 1px solid black;
    }
    `;
      console.log(css);
      content = juice.inlineContent(content, css);
      var converted = htmlDocx.asBlob(content);
      saveAs(converted, 'test.docx');


   
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Table</h1>
          <div class="tableBox">
          <table className="mytable" >
            <thead>
            <tr align="center">
              <th>Sample</th>
              <th>Equivalent</th>
              <th>Component</th>
            </tr>
            </thead>
            <tbody>
            <tr align="center">
              <td>1</td>
              <td>Calibration</td>
              <td>Door</td>
            </tr>
            <tr align="center" vertical-align="middle">
              <td>2</td>
              <td>Calibration</td>
              <td>Frame</td>
            </tr>
            </tbody>
          </table>
          </div>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <button onClick={this.docxToHTML}>Export</button>
      </div>
      
    );
  }
}

export default App;
