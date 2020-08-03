/* eslint no-magic-numbers: 0 */
import React, {Component} from 'react';
import { Game } from '../lib';

class App extends Component {

    constructor() {
        super();
        this.state = {
            value: 'DASH'
        };
        this.setProps = this.setProps.bind(this);
    }

    setProps(newProps) {
        this.setState(newProps);
    }

    render() {
        return (<Game/>)
    }
}

export default App;
