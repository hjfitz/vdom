import h from './dom'

const testElem = (props, meta) => {
    console.log(meta)

    meta.doMount(() => {
        console.log('mounted hook invoked')
        const self = document.querySelector('p')
        console.log({self})
        meta.setState({oi: 'foo'})
    })

    const onClick = () => meta.setState({oi: 'bar'})

    return h('p', { onclick: onClick }, 'test stateful' + meta.state.oi)
}

export default testElem
