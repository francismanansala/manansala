'use client'
import { styled } from '@mui/material'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl/FormControl'
import InputLabel from '@mui/material/InputLabel/InputLabel'
import Underline from '@tiptap/extension-underline'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { useState } from 'react'
import Stack from '@mui/material/Stack'

import Tooltip, { TooltipProps } from '@mui/material/Tooltip'


import Box from './../mui/box'
import Button from './../mui/button'
import Divider from '../mui/divider'
import Typography from './../mui/typography'
import SectionSelect from './section-select'
import TextFormatButtons from './text-format-buttons'
import BlockFormatButtons from './block-format-buttons'


const MenuBar = ({ editor }) => {
  if (!editor) {
    return null
  }

  const [section, setSection] = useState()
  return (
    <Stack direction='row' flexWrap='wrap'>
      <SectionSelect editor={editor} section={section} />
      <Divider orientation='vertical' flexItem sx={{ m: 1 }} />
      <TextFormatButtons editor={editor} />
      <Divider orientation='vertical' flexItem sx={{ m: 1 }}/>
      <BlockFormatButtons editor={editor}/>
    </Stack>
  )
}
const RichTextEditor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline.configure({
        HTMLAttributes: {
          class: 'underline',
        },
      }),
    ],
    content: `
      <h2>
        Hi there,
      </h2>
      <p>
        this is a <em>basic</em> example of <strong>tiptap</strong>. Sure, there are all kind of basic text styles you’d probably expect from a text editor. But wait until you see the lists:
      </p>
      <ul>
        <li>
          That’s a bullet list with one …
        </li>
        <li>
          … or two list items.
        </li>
      </ul>
      <p>
        Isn’t that great? And all of that is editable. But wait, there’s more. Let’s try a code block:
      </p>
      <pre><code class="language-css">body {
  display: none;
}</code></pre>
      <p>
        I know, I know, this is impressive. It’s only the tip of the iceberg though. Give it a try and click a little bit around. Don’t forget to check the other examples too.
      </p>
      <blockquote>
        Wow, that’s amazing. Good work, boy! 👏
        <br />
        — Mom
      </blockquote>
    `,
    onUpdate: ({ editor }) => {
      console.log('editor getJSON', editor.getJSON())
    },
  })

  return (
    <div>
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  )
}

export default RichTextEditor