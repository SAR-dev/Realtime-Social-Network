import { Node } from 'tiptap'
import { toggleBlockType, setBlockType, textblockTypeInputRule } from 'tiptap-commands'

export default class CodeBlock extends Node {

  get name() {
    return 'spoiler'
  }

  get schema() {
    return {
      content: 'text*',
      marks: '',
      group: 'block',
      defining: true,
      draggable: false,
      parseDOM: [
        { tag: 'pre', preserveWhitespace: 'full', class: 'spoiler' },
      ],
      toDOM: () => ['pre'],
    }
  }

  commands({ type, schema }) {
    return () => toggleBlockType(type, schema.nodes.paragraph)
  }

  keys({ type }) {
    return {
      'Shift-Ctrl-\\': setBlockType(type),
    }
  }

  inputRules({ type }) {
    return [
      textblockTypeInputRule(/^```$/, type),
    ]
  }

}