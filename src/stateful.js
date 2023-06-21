import h from './dom'

const testElem = (props, meta) => {
    console.log(meta)

    meta.doMount(() => {
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
