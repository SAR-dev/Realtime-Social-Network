<template>
  <v-container class="editreply py-0">
    <v-row>
      <v-col cols="12" style="max-width: 900px; margin-left: auto; margin-right: auto;" class="px-md-0">
          <div class="editor reply">
          <editor-menu-bar :editor="editor" v-slot="{ commands, isActive }">
            <div class="menubar blue-grey lighten-4 pa-2">
              <button
                class="mx-1 menubar__button"
                :class="{ 'is-active': isActive.bold() }"
                @click="commands.bold"
              >
                <span class="overline cyan round px-2 py-1 white--text">Bold</span>
              </button>

              <button
                class="mx-1 menubar__button"
                :class="{ 'is-active': isActive.italic() }"
                @click="commands.italic"
              >
                <span class="overline cyan round px-2 py-1 white--text">Italic</span>
              </button>

              <button
                class="mx-1 menubar__button"
                :class="{ 'is-active': isActive.code() }"
                @click="commands.code"
              >
                <span class="overline cyan round px-2 py-1 white--text">Spoiler</span>
              </button>

              <button
                class="mx-1 menubar__button"
                :class="{ 'is-active': isActive.paragraph() }"
                @click="commands.paragraph"
              >
                <span class="overline cyan round px-2 py-1 white--text">Para</span>
              </button>

              <button
                class="mx-1 menubar__button"
                :class="{ 'is-active': isActive.bullet_list() }"
                @click="commands.bullet_list"
              >
                <span class="overline cyan round px-2 py-1 white--text">List</span>
              </button>

              <button
                class="mx-1 menubar__button"
                :class="{ 'is-active': isActive.blockquote() }"
                @click="commands.blockquote"
              >
                <span class="overline cyan round px-2 py-1 white--text">Quote</span>
              </button>

              <button class="mx-1 menubar__button" @click="commands.undo">
                <span class="overline cyan round px-2 py-1 white--text">Undo</span>
              </button>

              <button class="mx-1 menubar__button" @click="commands.redo">
                <span class="overline cyan round px-2 py-1 white--text">Redo</span>
              </button>

              <button
                class="mx-1 menubar__button"
                @click="showImagePrompt(commands.image)"
              >
                <span class="overline cyan round px-2 py-1 white--text">Image</span>
              </button>

            </div>
          </editor-menu-bar>

          <editor-content class="editor__content" :editor="editor" />
        </div>
          <v-btn depressed small dark color="light-blue" class="float-right mt-2" @click="update">Update</v-btn>
          <v-btn depressed small dark color="pink" class="float-right mt-2 mr-3" @click="cancel">Cancel</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { Editor, EditorContent, EditorMenuBar } from "tiptap";
import Paragraph from '../../paragraph'
import {
  Image,
  Blockquote,
  CodeBlock,
  HardBreak,
  Heading,
  HorizontalRule,
  OrderedList,
  BulletList,
  ListItem,
  TodoItem,
  TodoList,
  Bold,
  Code,
  Italic,
  Link,
  Strike,
  Underline,
  History
} from "tiptap-extensions";
export default {
  props: ["reply"],
  components: {
    EditorContent,
    EditorMenuBar,
  },
  data() {
    return {
      body: null,
      editor: new Editor({
        extensions: [
          new Paragraph(),
          new Image(),
          new Blockquote(),
          new BulletList(),
          new CodeBlock(),
          new HardBreak(),
          new Heading({ levels: [1, 2, 3] }),
          new HorizontalRule(),
          new ListItem(),
          new OrderedList(),
          new TodoItem(),
          new TodoList(),
          new Link(),
          new Bold(),
          new Code(),
          new Italic(),
          new Strike(),
          new Underline(),
          new History()
        ],
        content: null,
        onUpdate: ({ getJSON, getHTML }) => {
          this.body = getHTML()
        },
      })
    };
  },
  beforeDestroy() {
    this.editor.destroy();
  },
  methods: {
    showImagePrompt(command) {
      const src = prompt('Enter the url of your image here')
      if (src !== null) {
        command({ src })
      }
    },
    cancel(){
          EventBus.$emit('cancelEditing');
    },
    update(){
        axios.patch(`/api/question/${this.reply.question_slug}/reply/${this.reply.id}`, {body: this.body})
          .then(res => this.cancel())
    },
    setContent() {
      this.editor.setContent({
        type: 'doc',
        content: [{
          type: 'paragraph',
          content: this.reply.reply
        }],
      }, true)
      this.editor.focus()
    },
  },
  mounted() {
      this.editor.setContent(`${this.reply.reply}`)
  },

};
</script>

<style>

</style>
