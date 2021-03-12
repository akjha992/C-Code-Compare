import axios from 'axios';
import React from 'react';
import './App.css';
import CodeBox from './components/CodeBox/CodeBox';
import CodeBoxBorder from './components/CodeBox/CodeBoxBorder';
import CodeBoxBorderHorizontal from './components/CodeBox/CodeBoxBorderHorizontal';

function decodeHTMLEntities(text) {
  let data=[text];
  data = data.map(item => {
    var textArea = document.createElement('textarea');
    textArea.innerHTML = item;
    return textArea.value;
  })
  return data;
}
class App extends React.Component {
  constructor() {
    super();
    let Code1 = localStorage.getItem("Code1");
    if(Code1==null){
      Code1=`#include <bits/stdc++.h>
using namespace std;
int main(){
    cout<<"your input";
}`;
    }
    let Code2 = localStorage.getItem("Code2");
    if(Code2==null){
      Code2=`#include <bits/stdc++.h>
using namespace std;
int main(){
  cout<<"Output from f1"<<endl;
}`;
    }
    let Code3 = localStorage.getItem("Code3");
    if(Code3==null){
      Code3=`#include <bits/stdc++.h>
using namespace std;
int main(){
  cout<<"Output from f2"<<endl;
}`;
    }
    this.state = {
      resizePosition: [0, 33, 67, 100],
      showResult: false,
      matchInput: '',
      matchF1: '',
      matchF2: '',
      minWidth: 20,
      minHeight: 20,
      maxHeight: 80,
      height: 50,
      terminalMessage: decodeHTMLEntities(`Output Pane\n\n`),
      title1: 'CustomInputGenerator.cpp',
      title2: 'Program1.cpp',
      title3: 'Program2.cpp',
      help1: `In each run, your code should print the new set of inputs to the stdout. These inputs will then be consumed by Program1 and Program2. Only use cout for printing (Dont use printf)`,
      help2: `All inputs should be read using cin (dont use scanf). Code must output using cout (dont use printf)`,
      help3: `All inputs should be read using cin (dont use scanf). Code must output using cout (dont use printf)`,
      Code1: Code1,
      Code2: Code2,
      Code3: Code3
    }
    this.getWidth = this.getWidth.bind(this);
    this.setBorderPosition = this.setBorderPosition.bind(this);
    this.setBorderPositionH = this.setBorderPositionH.bind(this);
    this.setCodeBoxProperty = this.setCodeBoxProperty.bind(this);
    this.compile = this.compile.bind(this);
    this.compare = this.compare.bind(this);
  }
  compile(id, code) {
    this.setState({ terminalMessage: [`Compiling ${this.state[`title${id}`]}`], showResult: false }, () => {
      axios.post('https://q-tv.herokuapp.com/api/compile/', {
        code
      }).then((resp) => {
        this.setState({ terminalMessage: decodeHTMLEntities(resp.data) });
      });
    });
  }
  compare() {
    this.setState({ terminalMessage: [`Comparing ${this.state.title2} and ${this.state.title3}`], showResult: false }, () => {
      axios.post('https://q-tv.herokuapp.com/api/compile/compare', {
        input: this.state.Code1,
        f1: this.state.Code2,
        f2: this.state.Code3
      }).then((resp) => {
        if (resp.data.code == 0) {
          this.setState({ terminalMessage: decodeHTMLEntities(resp.data.error) });
        } else if (resp.data.code == 1) {
          const message = `Found mismatch!\n\n`
          this.setState({
            terminalMessage: decodeHTMLEntities(message),
            matchInput: resp.data.input,
            matchF1: resp.data.output1,
            matchF2: resp.data.output2,
            showResult: true
          });
        } else {
          this.setState({ terminalMessage: ['Timeout reached!'] });
        }
      });
    });
  }
  setCodeBoxProperty(id, value) {
    localStorage.setItem(`Code${id}`, value);
    this.setState({
      [`Code${id}`]: value
    });
  }
  getWidth(item) {
    return this.state.resizePosition[item] - this.state.resizePosition[item - 1];
  }
  setBorderPosition(borderId, newPosition) {
    const resizePosition = JSON.parse(JSON.stringify(this.state.resizePosition));
    const leftLimit = this.state.resizePosition[borderId - 1] + this.state.minWidth;
    const rightLimit = this.state.resizePosition[borderId + 1] - this.state.minWidth;
    if (newPosition < leftLimit) {
      newPosition = leftLimit;
    } else if (newPosition > rightLimit) {
      newPosition = rightLimit;
    }
    resizePosition[borderId] = newPosition;
    this.setState({ resizePosition });
  }
  setBorderPositionH(newPosition) {
    if (newPosition < this.state.minHeight) {
      newPosition = this.state.minHeight;
    } else if (newPosition > this.state.maxHeight) {
      newPosition = this.state.maxHeight;
    }
    this.setState({ height: newPosition });
  }
  render() {
    return (
      <div id="view-page">
        <div className="top-part" id="top-part" style={{ height: `${this.state.height}%` }}>
          <CodeBoxBorder static />
          <CodeBox compiler={this.compile} id={1} width={`${this.getWidth(1)}%`} update={this.setCodeBoxProperty} code={this.state.Code1} title={this.state.title1} help={this.state.help1} />
          <CodeBoxBorder id={1} width={this.state.resizePosition[1]} onChange={this.setBorderPosition} />
          <CodeBox compiler={this.compile} id={2} width={`${this.getWidth(2)}%`} update={this.setCodeBoxProperty} code={this.state.Code2} title={this.state.title2} help={this.state.help2} />
          <CodeBoxBorder id={2} width={this.state.resizePosition[2]} onChange={this.setBorderPosition} />
          <CodeBox compiler={this.compile} id={3} width={`${this.getWidth(3)}%`} update={this.setCodeBoxProperty} code={this.state.Code3} title={this.state.title3} help={this.state.help3} />
          <CodeBoxBorder static />
        </div>
        <CodeBoxBorderHorizontal height={this.state.height} onChange={this.setBorderPositionH} />
        <div className='command-pane'>
          {/* <button className='command-pane-buttons'>TEST CUSTOM INPUT GENERATOR</button>
          <button className='command-pane-buttons'>RUN Program 1</button>
          <button className='command-pane-buttons'>RUN Program 2</button> */}
          <button onClick={this.compare} className='command-pane-buttons'>COMPARE CODE</button>
        </div>
        <CodeBoxBorderHorizontal height={this.state.height} onChange={this.setBorderPositionH} />
        <div className="console" style={{ height: `calc(${100 - this.state.height}% - 32px)` }}>
          {this.state.terminalMessage.map(item => (
            item === '' ? <br /> : <div className='console-line-item'>{item}</div>
          ))}
          <br/>
          <br/>
          <div className='result-div' hidden={!this.state.showResult}>
            Input
            <div className='console-textarea'>{
              this.state.matchInput.split("\n").map(function (item, idx) {
                return (
                  <span key={idx}>
                    {item}
                    <br />
                  </span>
                )
              })
            }</div>
            Output From Program 1
            <div className='console-textarea'>{
              this.state.matchF1.split("\n").map(function (item, idx) {
                return (
                  <span key={idx}>
                    {item}
                    <br />
                  </span>
                )
              })
            }</div>
            Output From Program 2
            <div className='console-textarea'>{
              this.state.matchF2.split("\n").map(function (item, idx) {
                return (
                  <span key={idx}>
                    {item}
                    <br />
                  </span>
                )
              })
            }</div>
          </div>
        </div>
      </div>
    );
  }


}

export default App;
