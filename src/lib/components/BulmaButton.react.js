import React, {Component, lazy, Suspense} from 'react';
import PropTypes from 'prop-types';
import './bulma.css';

const RealButton = lazy("../../fragment/ButtonFragment.react.js");

class BulmaButton extends Component {
    constructor(props) {
        super(props);
      }


      render() {

        return (
          <Suspense fallback={null}>
            <RealButton {...this.props}/>
          </Suspense>
        );
      }
}

export default BulmaButton;

BulmaButton.defaultProps = {};

BulmaButton.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    /**
     * The text displayed in the button.
     */
    value: PropTypes.string,

    /**
     * The size of the button.
     */
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    /**
     * The color of the button.
     */
    color: PropTypes.string,

    /**
     * Determines whether the button has
     * rounded corners.
     */
    rounded: PropTypes.bool,

    /**
     * Determines whether the button shows
     * the "loading" icon.
     */
    loading: PropTypes.bool,

    /**
     * Determines whether the button is
     * outlined.
     */
    outlined: PropTypes.bool,

    /**
     * Determines whether the button has
     * inverted colors.
     */
    inverted: PropTypes.bool,

    /**
     * Determines whether the button is
     * disabled.
     */
    disabled: PropTypes.bool,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};
