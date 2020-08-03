# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Clock(Component):
    """A Clock component.


Keyword arguments:
- id (optional): The ID used to identify this component in Dash callbacks.
- setProps (optional): Dash-assigned callback that should be called to report property changes
to Dash, to make them available for callbacks."""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'setProps']
        self._type = 'Clock'
        self._namespace = 'my_dash_component'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'setProps']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Clock, self).__init__(**args)
