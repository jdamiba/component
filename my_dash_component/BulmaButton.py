# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class BulmaButton(Component):
    """A BulmaButton component.


Keyword arguments:
- id (string; optional): The ID used to identify this component in Dash callbacks.
- value (string; optional): The text displayed in the button.
- size (a value equal to: 'small', 'medium', 'large'; optional): The size of the button.
- color (string; optional): The color of the button.
- rounded (boolean; optional): Determines whether the button has
rounded corners.
- loading (boolean; optional): Determines whether the button shows
the "loading" icon.
- outlined (boolean; optional): Determines whether the button is
outlined.
- inverted (boolean; optional): Determines whether the button has
inverted colors.
- disabled (boolean; optional): Determines whether the button is
disabled."""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, value=Component.UNDEFINED, size=Component.UNDEFINED, color=Component.UNDEFINED, rounded=Component.UNDEFINED, loading=Component.UNDEFINED, outlined=Component.UNDEFINED, inverted=Component.UNDEFINED, disabled=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'value', 'size', 'color', 'rounded', 'loading', 'outlined', 'inverted', 'disabled']
        self._type = 'BulmaButton'
        self._namespace = 'my_dash_component'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'value', 'size', 'color', 'rounded', 'loading', 'outlined', 'inverted', 'disabled']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(BulmaButton, self).__init__(**args)
