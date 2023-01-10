'use client'

import { Editor } from '@tiptap/react'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import Box from '@mui/material/Box'
import MenuItem from '@mui/material/MenuItem'
import Typography from '../mui/typography'

interface IProps {
  editor: Editor
  section: string
}

const SectionSelect = ({ editor, section }: IProps): React.ReactElement => {
  let activeSection = 'paragraph'
  if (editor.isActive('heading', { level: 1 })) activeSection = 'h1'
  if (editor.isActive('heading', { level: 2 })) activeSection = 'h2'
  if (editor.isActive('heading', { level: 3 })) activeSection = 'h3'
  if (editor.isActive('heading', { level: 4 })) activeSection = 'h4'
  if (editor.isActive('heading', { level: 5 })) activeSection = 'h5'
  if (editor.isActive('heading', { level: 6 })) activeSection = 'h6'

  return <Box>
    <FormControl>
      <InputLabel>section</InputLabel>
      <Select
        label='section'
        onChange={(event): void => {
          switch(event.target.value) {
            case 'h1':
              editor.chain().focus().toggleHeading({ level: 1 }).run()
              break
            case 'h2':
              editor.chain().focus().toggleHeading({ level: 2 }).run()
              break
            case 'h3':
              editor.chain().focus().toggleHeading({ level: 3 }).run()
              break
            case 'h4':
              editor.chain().focus().toggleHeading({ level: 4 }).run()
              break
            case 'h5':
              editor.chain().focus().toggleHeading({ level: 5 }).run()
              break
            case 'h6':
              editor.chain().focus().toggleHeading({ level: 6 }).run()
              break
            case 'paragraph':
            default:
              editor.chain().focus().setParagraph().run()
          }
        }}
        sx={{ height: '36.5px', width: 140 }}
        value={activeSection}
        renderValue={(value): string => {
          switch(value) {
            case 'h1':
              return 'Heading 1'
            case 'h2':
              return 'Heading 2'
            case 'h3':
              return 'Heading 3'
            case 'h4':
              return 'Heading 4'
            case 'h5':
              return 'Heading 5'
            case 'h6':
              return 'Heading 6'
            case 'paragraph':
            default:
              return 'Paragraph'
          }
        }}
      >
        <MenuItem value={'paragraph'} selected={section === 'paragraph'}>Paragraph</MenuItem>
        <MenuItem value={'h1'} selected={section === 'h1'}><Typography variant='h1'>Heading 1</Typography></MenuItem>
        <MenuItem value={'h2'} selected={section === 'h2'}><h2>Heading 2</h2></MenuItem>
        <MenuItem value={'h3'} selected={section === 'h3'}><h3>Heading 3</h3></MenuItem>
        <MenuItem value={'h4'} selected={section === 'h4'}><h4>Heading 4</h4></MenuItem>
        <MenuItem value={'h5'} selected={section === 'h5'}><h5>Heading 5</h5></MenuItem>
        <MenuItem value={'h6'} selected={section === 'h6'}><h6>Heading 6</h6></MenuItem>
      </Select>
    </FormControl>
  </Box>
}

export default SectionSelect