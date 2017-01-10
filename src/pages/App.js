import React, {Component} from 'react';
import './App.css'
import Toast from './_component/toast/Toast'
class App extends Component {
    render() {
        return (

            <div>
                <div className="box-com-toast">
                    <Toast/>
                </div>
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}
export default App;
