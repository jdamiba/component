# AUTO GENERATED FILE - DO NOT EDIT

bulmaButton <- function(id=NULL, value=NULL, size=NULL, color=NULL, rounded=NULL, loading=NULL, outlined=NULL, inverted=NULL, disabled=NULL) {
    
    props <- list(id=id, value=value, size=size, color=color, rounded=rounded, loading=loading, outlined=outlined, inverted=inverted, disabled=disabled)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'BulmaButton',
        namespace = 'my_dash_component',
        propNames = c('id', 'value', 'size', 'color', 'rounded', 'loading', 'outlined', 'inverted', 'disabled'),
        package = 'myDashComponent'
        )

    structure(component, class = c('dash_component', 'list'))
}
