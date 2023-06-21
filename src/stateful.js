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

    const child = h('p', {}, 'stateful child' + meta.state.oi)

    return h('p', { onclick: onClick }, [
      'test stateful' + meta.state.oi,
      child,
    ])
}

export default testElem
