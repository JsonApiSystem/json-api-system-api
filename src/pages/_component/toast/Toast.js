import React, {Component} from 'react';
import './Toast.css'
import ToastItem from './toast-item/Toast'
import eventQueue from 'husky-event-notify'
class Toast extends Component {
    static  EVENT_TOAST_ADD = 'EVENT_TOAST_ADD';

    constructor(props) {
        super(props)
        eventQueue.publish(Toast.EVENT_TOAST_ADD)
        this.state = {
            toasts: []
        }
        eventQueue.subscribe(Toast.EVENT_TOAST_ADD,(data) => {
            this.toastAdd(data)
        })
    }


    toastAdd(data) {
        this.setState({
            toasts: [
                ...this.state.toasts,
                data
            ]
        })
        setTimeout(() => {
            let data = this.state.toasts;
            data.splice(0, 1)
            this.setState({
                toasts: data
            })
        }, 3000)

    }

    render() {
        return (
            <div className="com-toast">
                {this.state.toasts.map((item, index) => <div key={index}>
                    <ToastItem summary={item.summary}/>
                </div>)}
            </div>
        );
    }
}
export default Toast;
