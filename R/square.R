# AUTO GENERATED FILE - DO NOT EDIT

square <- function(id=NULL, value=NULL) {
    
    props <- list(id=id, value=value)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Square',
        namespace = 'my_dash_component',
        propNames = c('id', 'value'),
        package = 'myDashComponent'
        )

    structure(component, class = c('dash_component', 'list'))
}
