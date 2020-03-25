import h from './dom'

const testElem = (props, self, meta) => {
    console.log({props, self, meta})
    return h('p', {}, 'test stateful')
}

export default testElem