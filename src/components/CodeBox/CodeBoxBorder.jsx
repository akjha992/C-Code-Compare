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
            const x = e.clientX;
            const total = document.getElementById(`top-part`).parentNode.getBoundingClientRect().width;
            this.props.onChange(this.props.id,this.state.relate+((x-this.state.position)*100/total));
    }
    onDragStart(e) {
        var x = (e.clientX);
        this.setState({
            position: x,
            relate: this.props.width,
            dragging: true
        }, ()=>{
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
        if(this.props.static){
            return <div className={styles.border}></div>;
        }else{
            return <div id={`border-${this.props.id}`} onMouseDown={this.onDragStart} className={`${styles.border} ${styles.borderNonStatic}`}></div>;
        };
    }
}

export default CodeBoxBorder;