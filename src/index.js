import h from './dom'
import render from './render'

import testElem from './stateful'

const entry = document.getElementById('entry')


const listTest = h(
    'ul',
    {},
    h('li', {}, 'one'),
    h('li', {}, 'two'),
    h('li', {}, 'three')    
)
    
const open = h('div', {}, testElem, listTest)

render(open, entry)