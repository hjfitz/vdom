export default function render(root, entryPoint) {

    if (typeof root === 'object') {
        root.mountedQueue = root.mountedQueue || []
        root.state = root.state || {}
        root.updateQueue = root.updateQueue || []
    }

    const doMount = (fn) => {
        root.mountedQueue.push(fn)
    }

    const doUpdate = (fn) => {
        root.updateQueue.push(fn)
    }

    const setState = (newState) => {
        root.state = {...newState}
	root.dom.parentElement.removeChild(root.dom)
        render(root, entryPoint)
    }
    // check arrays
    if (Array.isArray(root.tag)) {
        root.tag.map(elem => render(elem, entryPoint))
        return
    }
    // check component
    if (typeof root.tag === 'function') {
        // invoke the function and render the children
        const componentChildren = root.tag(root.props || {}, {doMount, setState, state: root.state})
        root.dom = render(componentChildren, entryPoint)
        // return
    }

    if (typeof root === 'string') {
        root = {dom: document.createTextNode(root)}
    }

    root.dom = root.dom || document.createElement(root.tag);
    // check tag
    // check text
   
    // begin diff
    const diff = Object.keys(root.props || {}).filter((key) => {
        const ref = root.props || {}
        return !(key in root.dom) || ref[key] !== root.dom[key]
    });

    (diff || []).forEach(key => root.dom[key] = (root.props || {})[key]) 

    // is there a difference? re-render
    if (!root.mounted) {
        console.log('root:', root, !root.mounted)
        entryPoint.appendChild(root.dom)
        root.mounted = true;

        (root.mountedQueue || []).map(fn => fn())
    }

    // todo: diff this before a render
    // handle children
    (root.children || []).forEach(child => render(child, root.dom))


    // here children get checked and returned for stateful elements. check here, do unmounting if there is diff (if possible)
    return root.dom
    return ''
}
