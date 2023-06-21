# vdom

I wanted to see if I could write my own react, to understand the framework. I did just that.

This is a highly un-tested, highly experimental dom-hybrid react-esque framework. 

## Usage

If you actually did want to play with this framework, it works as follows:

**Create an element**

```jsx
// yes, this needs a better name
import {render, h} from 'hareact'

// this should theoretically be friendly with jsx
const para = h('p', { class: 'bg-red' }, 'hello, world')
const body = h('main', {}, h(para))

document.addEventListener('DOMContentLoaded', () => {
  const entryPoint = document.getElementById('entry')
  render(h(body), entryPoint)
}
```
