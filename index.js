const {client} = require('tre-client')
const Tree = require('tre-treeview-select')
const h = require('mutant/html-element')

document.body.appendChild(h('style', `
  li.children {
    list-style-type: none;
  }
  span[id].selected {
    background-color: blue;
  }
  span[id].secondary-selected {
    background-color: yellow;
  }
`))

client( (err, ssb, config) => {
  console.log('tre config', config.tre)
  if (err) return console.error(err)
  const renderTree = Tree(ssb, {
    summary: kv => h('span', kv.value.content.name)
  })
  document.body.appendChild(
    h('ul',
      renderTree({
        key: config.tre.branches.root,
        value: { content: { name: 'root' } }
      })
    )
  )
})
