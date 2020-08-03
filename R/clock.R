# AUTO GENERATED FILE - DO NOT EDIT

clock <- function(id=NULL) {
    
    props <- list(id=id)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Clock',
        namespace = 'my_dash_component',
        propNames = c('id'),
        package = 'myDashComponent'
        )

    structure(component, class = c('dash_component', 'list'))
}
