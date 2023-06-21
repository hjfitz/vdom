export default function render(root, entryPoint) {

    if (typeof root === 'object') {
        root.mountedQueue = root.mountedQueue || []
        root.state = root.state || {}
        root.updateQueue = root.updateQueue || []
    }

    const doMount = (fn) => {
        root.mountedQueue.push(fn)
    }

    const setState = (newState) => {
	// merge states
        root.state = {...root.state, ...newState}
	
	// kill the element as this gets re-rendered
	// todo: we should do this as part of the diff re-render
	root.dom.parentElement.removeChild(root.dom)
        render(root, entryPoint)
    }

    if (Array.isArray(root)) {
        root.map(elem => render(elem, entryPoint))
        return
    }

    // check component
    if (typeof root.tag === 'function') {
        const componentChildren = root.tag(root.props || {}, {doMount, setState, state: root.state})
        root.dom = render(componentChildren, entryPoint)
    }

    if (typeof root === 'string') {
        root = {dom: document.createTextNode(root)}
    }

    root.dom = root.dom || document.createElement(root.tag);
   
    const diff = Object.keys(root.props || {}).filter((key) => {
        const ref = root.props || {}
        return !(key in root.dom) || ref[key] !== root.dom[key]
    });

    (diff || []).forEach(key => root.dom[key] = (root.props || {})[key]) 

    // is there a difference? re-render
    if (!root.mounted) {
        entryPoint.appendChild(root.dom)
        root.mounted = true;

        (root.mountedQueue || []).map(fn => fn())
    }

    (root.children || []).forEach(child => render(child, root.dom))

    return root.dom
}
