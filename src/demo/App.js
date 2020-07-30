/* eslint no-magic-numbers: 0 */
import React, {Component} from 'react';

import { BulmaButton } from '../lib';

import { BulmaBox } from '../lib';

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
        return <>

        <BulmaBox>
            <BulmaButton label={'Mandela'} color="info" value={this.state.value} size="large" rounded disabled setProps={this.setProps}/>
            <BulmaButton size="small" label={'Mandela'} color="info" value={this.state.value} rounded disabled setProps={this.setProps}/>
        </BulmaBox>

        </>
    }
}

export default App;
