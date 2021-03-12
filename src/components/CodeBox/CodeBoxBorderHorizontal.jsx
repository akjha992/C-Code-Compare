import React from 'react';
import styles from './codeBoxBorderStyles.module.css';
class CodeBoxBorder extends React.Component {
    constructor() {
        super();
        this.onDragStart = this.onDragStart.bind(this);
        this.onDragEnd = this.onDragEnd.bind(this);
        this.drag = this.drag.bind(this);
    }
    drag(e) {
        const y = e.clientY;
        const total = document.getElementById(`view-page`).parentNode.getBoundingClientRect().height;
        let newVal = this.state.relate + ((y - this.state.position) * 100 / total);
        this.props.onChange(newVal);
    }
    onDragStart(e) {
        var y = (e.clientY);
        this.setState({
            position: y,
            relate: this.props.height,
            dragging: true
        }, () => {
            document.addEventListener("mousemove", this.drag);
            document.addEventListener("mouseup", this.onDragEnd);
        });
    }
    onDragEnd(e) {
        document.removeEventListener("mousemove", this.drag);
        this.setState({
            dragging: false
        });
    }
    render() {
        return (
            <div id={`borderH-${this.props.id}`} onMouseDown={this.onDragStart} className="horizontal-border"></div>
        );
    }
}

export default CodeBoxBorder;