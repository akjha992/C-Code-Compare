import React from 'react';
import axios from 'axios';
import './App.css';
import raw from './main.js'; // Relative path to your File
const defaultFunctionCode = (fname) => {
  return `void ${fname}(){
    /*****Instructions**********
     * Remove any #include directives or global variables
     * All inputs should be read using cin (dont use scanf)
     * Code must output using cout (dont use printf)
     * If there are other functions, place them above this function 
     * and make sure their names dont coincide in two codes
    */
    cout<<"Output from ${fname}"<<endl;
}`;
}
const defaultInputGenCode = `string myInputGen()
{
    /*****Instructions**********
     * This function should not print anything.
     * You can use rand() function to randomize inputs
     * Use to_string() method to put integers input
    */
    return "your input";
}`;
function decodeHTMLEntities(text) {
  var textArea = document.createElement('textarea');
  textArea.innerHTML = text;
  return textArea.value;
}
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      f1: defaultFunctionCode("function1"),
      f2: defaultFunctionCode("function2"),
      myInputFunctionCode: defaultInputGenCode,
      consoleWidth: 90,
      consoleOutput: {
        input: "",
        f1_out: "",
        f2_out: ""
      },
      maxTries: 1000000,
      comparing: false,
      timeout: 10
    }
    this.getCodeFromInput = this.getCodeFromInput.bind(this);
    this.compare = this.compare.bind(this);
    this.onChangeText = this.onChangeText.bind(this);
  }
  getCodeFromInput() {
    const code = `
    ${raw.replaceAll("REPLACE_ME_WITH_A_CONSTANT_VALUE", this.state.maxTries)}
    ${this.state.myInputFunctionCode}
    ${this.state.f1}
    ${this.state.f2}`;
    return code;
  }
  compare() {
    axios.defaults.timeout = this.state.timeout * 1000;
    this.setState({
      status: `Comparing both function with ${this.state.maxTries} random inputs with a timeout of ${this.state.timeout} seconds.`,
      consoleOutput: {
        input: "",
        f1_out: "",
        f2_out: ""
      },
      comparing: true
    })
    const code = this.getCodeFromInput();
    axios.post("http://localhost:5000/api/users/compile", {
      code
    }).then(res => {
      const data = res.data.substring(153).split("|");
      console.log(data);
      if (data.length === 3) {
        this.setState({
          status: "Found Mismatch!",
          consoleOutput: {
            input: data[0],
            f1_out: data[1],
            f2_out: data[2]
          },
          showIssue: true,
          comparing: false
        });
      } else {
        this.setState({
          status: decodeHTMLEntities(data[0]),
          showIssue: false,
          comparing: false
        });
      }
    })
      .catch(err => {
        this.setState({
          status: "Timeout reached!",
          showIssue: false,
          comparing: false
        });
      });
  }
  onChangeText(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  render() {
    return (
      <div className="main">
        <div className="header">
          <button disabled={this.state.comparing} className="compareButton" onClick={this.compare}>{this.state.comparing ? `Comparing...` : `Compare`}</button>
          Timeout Limit
          <select value={this.state.timeout} name='timeout' onChange={this.onChangeText}>
            <option value='1'>1 Seconds</option>
            <option value='10'>10 Seconds</option>
            <option value='20'>20 Seconds</option>
            <option value='60'>60 Seconds</option>
          </select>
          Number of Inputs
          <select value={this.state.maxTries} name='maxTries' onChange={this.onChangeText}>
            <option value='10'>10</option>
            <option value='1000'>10^3</option>
            <option value='1000000'>10^6</option>
            <option value='1000000000'>10^9</option>
          </select>
        </div>
        <div className="App">
          <div className="editor">
            <div className="input-params">
              <textarea onChange={this.onChangeText} name="myInputFunctionCode" form="usrform" value={this.state.myInputFunctionCode}></textarea>
            </div>
            <div className="function-codes">
              <div className="f1">
                <textarea className="functions-box" onChange={this.onChangeText} name="f1" form="usrform" value={this.state.f1}></textarea>
              </div>
              <div className="f2">
                <textarea className="functions-box" onChange={this.onChangeText} name="f2" form="usrform" value={this.state.f2}></textarea>
              </div>
            </div>
          </div>
          <div className="console" ref='test' style={{ width: `${this.state.consoleWidth}%` }}>
            <span className="headline">Status</span>
            <textarea readOnly className="consoleEditor" name="status" form="usrform" value={this.state.status}></textarea>

            <span className="headline">Input</span>
            <textarea readOnly className="consoleEditor" name="input" form="usrform" value={this.state.consoleOutput.input}></textarea>

            <span className="headline">Output From function1</span>
            <textarea readOnly className="consoleEditor" name="f1_out" form="usrform" value={this.state.consoleOutput.f1_out}></textarea>

            <span className="headline">Output From function2</span>
            <textarea readOnly className="consoleEditor" name="f2_out" form="usrform" value={this.state.consoleOutput.f2_out}></textarea>
          </div>
        </div>
      </div>
    );
  }


}

export default App;
