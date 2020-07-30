# AUTO GENERATED FILE - DO NOT EDIT

bulmaBox <- function(children=NULL) {
    
    props <- list(children=children)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'BulmaBox',
        namespace = 'my_dash_component',
        propNames = c('children'),
        package = 'myDashComponent'
        )

    structure(component, class = c('dash_component', 'list'))
}
