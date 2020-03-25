function normaliseChildren(children) {
    // string will always be a leaf, create our textNode
    if (typeof children === 'string') {
        return {
            element: 'textNode',
            props: {},
            textContent: children,
        }
    }
    return children
}

function h(tag, props={}, ...children) {
    console.log(children)
    return {
        element: tag,
        props,
        children: children.map(normaliseChildren)
    }
}

export default h