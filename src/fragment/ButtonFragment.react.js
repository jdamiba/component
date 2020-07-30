import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './bulma.css';
import { Button } from 'react-bulma-components/dist';

class ButtonFragment extends Component {
    constructor(props) {
        super(props);
      }


      render() {
        const {value, color, rounded, disabled, outlined, size, inverted, loading } = this.props;

        return (
            <Button color={color} rounded={rounded} disabled={disabled} outlined={outlined} size={size} inverted={inverted} loading={loading}>
                {value}
            </Button>
        );
      }
}

export default ButtonFragment;

ButtonFragment.defaultProps = {};

ButtonFragment.propTypes = {
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
