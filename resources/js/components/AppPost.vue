<template>
  <v-container>
    <v-row class="pb-5 mx-auto" style="max-width: 900px">
      <v-col cols="12">
        <v-text-field
            v-model="form.title"
            placeholder="Give an awesome Title !!!"
            outlined
            dense
            color="cyan"
          ></v-text-field>
      </v-col>
      <v-col cols="12">
        <div class="editor">
          <editor-menu-bar :editor="editor" v-slot="{ commands, isActive }">
            <div class="menubar white py-3 text-center">
              <button
                class="mx-1 menubar__button"
                :class="{ 'is-active': isActive.bold() }"
                @click="commands.bold"
              >
                <v-icon class="blue-grey--text text--darken-3 pa-1" style="border-radius: 50%">format_bold</v-icon>
              </button>

              <button
                class="mx-1 menubar__button"
                :class="{ 'is-active': isActive.italic() }"
                @click="commands.italic"
              >
                <v-icon class="blue-grey--text text--darken-3 pa-1" style="border-radius: 50%">format_italic</v-icon>
              </button>

              <button
                class="mx-1 menubar__button"
                :class="{ 'is-active': isActive.strike() }"
                @click="commands.strike"
              >
                <v-icon class="blue-grey--text text--darken-3 pa-1" style="border-radius: 50%">strikethrough_s</v-icon>
              </button>

              <button
                class="mx-1 menubar__button"
                :class="{ 'is-active': isActive.underline() }"
                @click="commands.underline"
              >
                <v-icon class="blue-grey--text text--darken-3 pa-1" style="border-radius: 50%">format_underline</v-icon>
              </button>
              
              <button
                class="mx-1 menubar__button"
                :class="{ 'is-active': isActive.paragraph() }"
                @click="commands.paragraph"
              >
                <v-icon class="blue-grey--text text--darken-3 pa-1" style="border-radius: 50%">format_textdirection_l_to_r</v-icon>
              </button>

              <button
                class="mx-1 menubar__button"
                :class="{ 'is-active': isActive.heading({ level: 1 }) }"
                @click="commands.heading({ level: 1 })"
              >
              <v-icon class="blue-grey--text text--darken-3 pa-1" style="border-radius: 50%">mdi-format-header-1</v-icon>
              </button>

              <button
                class="mx-1 menubar__button"
                :class="{ 'is-active': isActive.heading({ level: 2 }) }"
                @click="commands.heading({ level: 2 })"
              >
                <v-icon class="blue-grey--text text--darken-3 pa-1" style="border-radius: 50%">mdi-format-header-2</v-icon>
              </button>

              <button
                class="mx-1 menubar__button"
                :class="{ 'is-active': isActive.heading({ level: 3 }) }"
                @click="commands.heading({ level: 3 })"
              >
                <v-icon class="blue-grey--text text--darken-3 pa-1" style="border-radius: 50%">mdi-format-header-3</v-icon>
              </button>

              <button
                class="mx-1 menubar__button"
                :class="{ 'is-active': isActive.bullet_list() }"
                @click="commands.bullet_list"
              >
                <v-icon class="blue-grey--text text--darken-3 pa-1" style="border-radius: 50%">format_list_bulleted</v-icon>
              </button>

              <button
                class="mx-1 menubar__button"
                :class="{ 'is-active': isActive.ordered_list() }"
                @click="commands.ordered_list"
              >
                <v-icon class="blue-grey--text text--darken-3 pa-1" style="border-radius: 50%">format_list_numbered</v-icon>
              </button>

              <button
                class="mx-1 menubar__button"
                :class="{ 'is-active': isActive.blockquote() }"
                @click="commands.blockquote"
              >
                <v-icon class="blue-grey--text text--darken-3 pa-1" style="border-radius: 50%">format_quote</v-icon>
              </button>

              <button
                class="mx-1 menubar__button"
                :class="{ 'is-active': isActive.code_block() }"
                @click="commands.code_block"
              >
                <v-icon class="blue-grey--text text--darken-3 pa-1" style="border-radius: 50%">mdi-code-array</v-icon>
              </button>

              <button class="mx-1 menubar__button" @click="commands.horizontal_rule">
                <v-icon class="blue-grey--text text--darken-3 pa-1" style="border-radius: 50%">mdi-format-page-break</v-icon>
              </button>

              <button class="mx-1 menubar__button" @click="commands.undo">
                <v-icon class="blue-grey--text text--darken-3 pa-1" style="border-radius: 50%">undo</v-icon>
              </button>

              <button class="mx-1 menubar__button" @click="commands.redo">
                <v-icon class="blue-grey--text text--darken-3 pa-1" style="border-radius: 50%">redo</v-icon>
              </button>

              <button
                class="mx-1 menubar__button"
                @click="showImagePrompt(commands.image)"
              >
                <v-icon class="blue-grey--text text--darken-3 pa-1" style="border-radius: 50%">add_photo_alternate</v-icon>
              </button>

              <button
                :class="{ 'v-btn--active': isActive.paragraph({ textAlign: 'left' }) }" 
                @click="commands.paragraph({ textAlign: 'left' })">
                <v-icon class="blue-grey--text text--darken-3 pa-1" style="border-radius: 50%">format_align_left</v-icon>
              </button>
              <button 
                :class="{ 'v-btn--active': isActive.paragraph({ textAlign: 'center' }) }"
                @click="commands.paragraph({ textAlign: 'center' })">
                <v-icon class="blue-grey--text text--darken-3 pa-1" style="border-radius: 50%">format_align_center</v-icon>
              </button>
              <button 
                :class="{ 'v-btn--active': isActive.paragraph({ textAlign: 'right' }) }"
                @click="commands.paragraph({ textAlign: 'right' })">
                <v-icon class="blue-grey--text text--darken-3 pa-1" style="border-radius: 50%">format_align_right</v-icon>
              </button>
            </div>
          </editor-menu-bar>
          <hr>

          <editor-content class="editor__content" :editor="editor" />
        </div>
      </v-col>
      <v-col cols="6">
        <v-select
              :items="categories"
              label="Category"
              item-text="name"
              item-value="id"
              v-model="form.category_id"
              dense
              outlined
            ></v-select>
      </v-col>
      <v-col cols="6">
        <v-select
              :items="books"
              label="Series"
              item-text="name"
              item-value="id"
              v-model="form.book_id"
              dense
              outlined
            ></v-select>
      </v-col>
      <v-col cols="12">
        <v-btn large color="cyan" class="white--text px-10 float-left" @click="create">Post</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { Editor, EditorContent, EditorMenuBar } from "tiptap";
import Paragraph from './../paragraph.js'
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
  components: {
    EditorContent,
    EditorMenuBar,
  },
  data() {
    return {
      errors:{},
      form: {
        title: null,
        category_id: null,
        book_id: null,
        body: null
      },
      categories:{},
      books: {},
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
          this.form.body = getHTML()
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
    create(){
      axios.post('/api/question', this.form)
        .then(res => this.$router.push(res.data.path))
        .catch(error => this.errors = error.response.data.error)
    },
    setContent() {
      this.editor.setContent({
        type: 'doc',
        content: [{
          type: 'paragraph',
          content: [
            {
              type: 'text',
              text: 'This is some inserted text. 👋',
            },
          ],
        }],
      }, true)
      this.editor.focus()
    },
  },
  created() {
    axios.get('/api/category')
      .then(res => this.categories = res.data.data)
    axios.get('/api/book')
      .then(res => this.books = res.data.data)
    },

};
</script>

<style>
  
</style>