import { Editor } from '@tiptap/react'
import styled from '@mui/material/styles/styled'

import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted'
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered'

import FormatButton from './format-button'
import Button from '../mui/button'
import ButtonToolTip from './button-tool-tip'

const MenuButton = styled(Button)(({ theme }) => ({
  minWidth: 'initial',
  color: theme.palette.text.primary,
}))

interface IProps {
  editor: Editor
}

const BlockFormatButtons = ({ editor }: IProps): React.ReactElement => {
  const getVariant = (format: string): 'contained' | undefined => (editor.isActive(format) ? 'contained' : undefined)

  return <>
    <MenuButton onClick={() => editor.chain().focus().clearNodes().run()}>
        clear nodes
    </MenuButton>
    <ButtonToolTip title='Bulleted List'>
      <FormatButton
        onClick={(): boolean => editor.chain().focus().toggleBulletList().run()}
        variant={getVariant('bulletList')}
      >
        <FormatListBulletedIcon/>
      </FormatButton>
    </ButtonToolTip>
    <ButtonToolTip title='Ordered List'>
      <FormatButton
        onClick={(): boolean => editor.chain().focus().toggleOrderedList().run()}
        variant={getVariant('orderedList')}
      >
        <FormatListNumberedIcon />
      </FormatButton>
    </ButtonToolTip>
    <FormatButton
      onClick={() => editor.chain().focus().toggleCodeBlock().run()}
      variant={getVariant('codeBlock')}
    >
        code block
    </FormatButton>
    <MenuButton
      onClick={() => editor.chain().focus().toggleBlockquote().run()}
      variant={getVariant('blockquote')}
    >
        blockquote
    </MenuButton>
    <MenuButton onClick={() => editor.chain().focus().setHorizontalRule().run()}>
        horizontal rule
    </MenuButton>
    <MenuButton onClick={() => editor.chain().focus().setHardBreak().run()}>
        hard break
    </MenuButton>
    <MenuButton
      onClick={() => editor.chain().focus().undo().run()}
      disabled={
        !editor.can()
          .chain()
          .focus()
          .undo()
          .run()
      }
    >
        undo
    </MenuButton>
    <MenuButton
      onClick={() => editor.chain().focus().redo().run()}
      disabled={
        !editor.can()
          .chain()
          .focus()
          .redo()
          .run()
      }
    >
        redo
    </MenuButton>
  </>
}

export default BlockFormatButtons