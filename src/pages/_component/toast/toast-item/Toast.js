import React, {Component} from 'react';
import './Toast.css'
class ToastItem extends Component {


    render() {
        return (
            <div className="com-toast-item">
                <p>{this.props.summary}</p>
            </div>
        );
    }
}
export default ToastItem;
