/**
 * 
 * @param {VNode} tree Tree of elements to render
 * @param {HTMLElement} entry Element in which to render our dom
 */
export default function render(root, entry) {
    console.log({root, entry})
    // 1. create elem

    let elem = document.createElement(root.element)
    if (root.element === 'textNode') elem = document.createTextNode(root.textContent)
    console.log('root', typeof root, root)

    console.log('created element: ', {elem, root})


    // 2. set properties TODO: make sure this works
    Object.entries(root.props).forEach(([key, val]) => {
        elem.setAttribute(key, val)
    })


    // 3. recur and handle the next nodes
    if (root.children) {
        if (Array.isArray(root.children)) {
            console.log('here')
            root.children.map(child => render(child, elem))
        } else {
            render(root.children, elem)
        }
    }

    // 4. render
    entry.appendChild(elem)

}