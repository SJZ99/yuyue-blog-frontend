<template>
  <div>
    <!-- bubble menu -->
    <bubble-menu :editor="editor" v-if="editor" class="bubble-menu">
      <button @click="title" :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }">
          <tip-icon icon="mdi-format-text" tip="title"/>
      </button>
      <button @click="editor.chain().focus().toggleBold().run()" :class="{ 'is-active': editor.isActive('bold') }">
          <tip-icon icon="mdi-format-bold" tip="bold(crtl+B)"/>
      </button>
      <button @click="editor.chain().focus().toggleItalic().run()" :class="{ 'is-active': editor.isActive('italic') }">
          <tip-icon icon="mdi-format-italic" tip="italic(crtl+I)"/>
      </button>
      <button @click="editor.chain().focus().toggleCodeBlock().run()" :class="{ 'is-active': editor.isActive('codeBlock') }">
          <tip-icon icon="mdi-code-braces" tip="code block"/>
      </button>
      <!-- more -->
      <button @click="bubble_more = !bubble_more">
          <tip-icon icon="mdi-dots-vertical" tip="more"/>
      </button>
      <button v-show="bubble_more" @click="editor.chain().focus().toggleBulletList().run()" :class="{ 'is-active': editor.isActive('bulletList')}">
          <tip-icon icon="mdi-format-list-bulleted" tip="bullet list"/>
      </button>
      <button v-show="bubble_more" @click="editor.chain().focus().toggleOrderedList().run()" :class="{ 'is-active': editor.isActive('orderedList')}">
          <tip-icon icon="mdi-format-list-numbered" tip="order list"/>
      </button>
    </bubble-menu>

    <!-- floating menu -->
    <floating-menu
      class="floating-menu"
      :tippy-options="{ duration: 100 }"
      :editor="editor"
      v-if="editor"
    >
      <button @click="editor.chain().focus().toggleHeading({ level: 1 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }">
          <tip-icon icon="mdi-format-text" tip="title"/>
      </button>
      <button @click="editor.chain().focus().toggleCodeBlock().run()" :class="{ 'is-active': editor.isActive('codeBlock') }">
          <tip-icon icon="mdi-code-braces" tip="code block"/>
      </button>
      <button @click="editor.chain().focus().toggleBlockquote().run()" :class="{ 'is-active': editor.isActive('blockquote') }">
          <tip-icon icon="mdi-format-quote-close" tip="quote(crtl+shift+B)"/>
      </button>
      <button @click="editor.chain().focus().toggleBulletList().run()" :class="{ 'is-active': editor.isActive('bulletList') }">
          <tip-icon icon="mdi-format-list-bulleted" tip="bullet list"/>
      </button>
      <button @click="editor.chain().focus().toggleOrderedList().run()" :class="{ 'is-active': editor.isActive('orderedList') }">
          <tip-icon icon="mdi-format-list-numbered" tip="order list"/>
      </button>
    </floating-menu>
    <editor-content :editor="editor"/>
  </div>
</template>

<script>
/* 
   Blockquote, BulletList, CodeBlock, Document, HardBreak, Heading, 
   HorizontalRule, ListItem, Mention, OrderedList, Paragraph, Text, 
   Bold, Code, Italic, Strike, TextStyle, Dropcursor, Gapcursor, History 
*/
import StarterKit from '@tiptap/starter-kit'
import {
  Editor,
  EditorContent,
  BubbleMenu,
  FloatingMenu,
} from '@tiptap/vue-2'

import Typography from '@tiptap/extension-typography'

import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import lowlight from 'lowlight'
import TipIcon from '@/components/TipIcon.vue'

import BulletList from '@tiptap/extension-bullet-list'
import PrefaceExtension from '../js/Extension'

import vuex from '../js/vuex'

const my_bulletList = BulletList.extend({
  addKeyboardShortcuts() {
    return {
      'Tab': () => this.editor.commands.insertContent("    "),
    }
  },
})

export default {
  components: {
    EditorContent,
    BubbleMenu,
    FloatingMenu,
    TipIcon,
  },

  data: () => ({
    editor: null,
    bubble_more: false,
    title_statue: false,
    timer: '',
    content: '<h1>Title</h1> <preface>preface</preface> <p>content</p>',
  }),

  props: {
    editable: {
      type: Boolean,
      default: true,
    }
  },

  mounted () {
    if(vuex.state.content) {
      this.content = vuex.state.content
    }
    this.editor = new Editor({
      content: this.content,
      extensions: [
        StarterKit,
        Typography,
        my_bulletList,
        PrefaceExtension,
        CodeBlockLowlight.configure({
          lowlight,
        }),
      ],
    })

    if(this.timer) {
      clearInterval(this.timer)
    } 
    this.timer = setInterval(this.save, 5000);
  },

  beforeDestroy() {
    this.editor.destroy()
    clearInterval(this.timer)
  },

  methods: {
    title () {
      if(this.title_statue) { //h2

        this.editor.chain().focus().toggleHeading({ level: 2 }).run();
      }else { //h1

        this.editor.chain().focus().toggleHeading({ level: 1 }).run();
      }

      this.title_statue = !this.title_statue;
    },
    save () {
      let html = this.editor.getHTML();
      vuex.commit('SET_CONTENT', html);
    }
  },
}
</script>

<style lang="scss" scope>
@import '../assets/scss/components/tiptap.scss';

</style>