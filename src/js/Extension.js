import { Node, mergeAttributes } from '@tiptap/core'
import { VueNodeViewRenderer } from '@tiptap/vue-2'
import PrefaceExtension from '../components/PrefaceExtension.vue'

export default Node.create({
    name: 'preface',
  
    group: 'block',
  
    content: 'inline*',
  
    parseHTML() {
      return [
        {
          tag: 'preface',
        },
      ]
    },
  
    renderHTML({ HTMLAttributes }) {
      return ['preface', mergeAttributes(HTMLAttributes), 0]
    },
  
    addNodeView() {
      return VueNodeViewRenderer(PrefaceExtension)
    },
  })