import createElement from './dom'
import render from './render'

import testElem from './stateful'

const entry = document.getElementById('entry')


const listTest = createElement(
    'ul',
    {},
    createElement('li', {}, 'one'),
    createElement('li', {}, 'two'),
    createElement('li', {}, 'three')    
)
    
const open = () => createElement('div', {classList: 'bg-black'}, listTest, createElement(testElem, {className: 'oi'}))

render(createElement(open), entry)