import h from './dom'

const testElem = (props, meta) => {

    meta.doMount(() => {
        console.log('mounted hook invoked')
        const self = document.querySelector('p')
        console.log({self})
    })

    return h('p', {}, 'test stateful')
}

export default testElem