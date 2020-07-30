import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../fragment/bulma.css';

class BulmaBox extends Component {
    constructor(props) {
        super(props);
      }


      render() {

        const props = this.props;

        return (
          <div className="box">
            {props.children}
          </div>
        );
      }
}

export default BulmaBox;

BulmaBox.defaultProps = {};

BulmaBox.propTypes = {

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    children: PropTypes.node,
    setProps: PropTypes.func
};
