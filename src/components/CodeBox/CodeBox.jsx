import React from 'react';
import Prism from 'prismjs';
import './prism.css';
import './CodeBox.css';
class CodeBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title,
            content: this.props.code,
            helpText: this.props.help,
            html: "",
            scrollTop: 0,
            rotated: false,
        }
        this.onChangeText = this.onChangeText.bind(this);
        this.highlight = this.highlight.bind(this);
        this.coupleScroll = this.coupleScroll.bind(this);
        this.pCode = React.createRef();
        this.scroller = React.createRef();
        this.coupleDiv = React.createRef();
    }
    componentDidMount() {
        this.highlight();
    }
    coupleScroll(e) {
        this.coupleDiv.current.scrollTop = this.scroller.current.scrollTop;
        this.coupleDiv.current.scrollLeft = this.scroller.current.scrollLeft;
    }
    highlight() {
        const html = Prism.highlight(this.state.content, Prism.languages.js, 'js');
        this.pCode.current.innerHTML = html;
    }
    onChangeText(e) {

        this.setState({
            content: e.target.value
        }, () => {
            this.highlight();
            this.props.update(this.props.id, e.target.value);
        });

    }
    render() {
        return (
            <div className='code-box' style={{ width: this.props.width ? this.props.width : '100%' }}>
                <div className='box-title'>
                    <div className='code-title'>{this.state.title}</div>
                    <div className='title-command-buttons'>
                        <i onClick={()=>{this.props.compiler(this.props.id, this.state.content)}} className="fa fa-play code-compile-button"></i>
                        <div onClick={() => { this.setState({ rotated: !this.state.rotated }) }} className="help-question">{this.state.rotated ? '^' : '?'}</div>
                    </div>
                </div>
                <div className="box-frame" >
                    <pre ref={this.coupleDiv}>
                        <code ref={this.pCode} className="language-js" />
                    </pre>
                    <textarea ref={this.scroller} onScroll={this.coupleScroll} spellCheck="false" name='textBox' value={this.state.content} onChange={this.onChangeText} className='code-text'></textarea>
                </div>
                <div className={this.state.rotated ? "help-div" : "help-div rotated"}>
                    {this.state.helpText}
                </div>
            </div>
        );
    }
}
export default CodeBox;