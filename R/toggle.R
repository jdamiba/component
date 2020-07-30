# AUTO GENERATED FILE - DO NOT EDIT

toggle <- function(id=NULL, label=NULL, value=NULL, color=NULL, rounded=NULL) {
    
    props <- list(id=id, label=label, value=value, color=color, rounded=rounded)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Toggle',
        namespace = 'my_dash_component',
        propNames = c('id', 'label', 'value', 'color', 'rounded'),
        package = 'myDashComponent'
        )

    structure(component, class = c('dash_component', 'list'))
}
