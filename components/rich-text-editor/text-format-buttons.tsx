import { Editor } from '@tiptap/react'
import FormatBoldIcon from '@mui/icons-material/FormatBold'
import FormatItalicIcon from '@mui/icons-material/FormatItalic'
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined'
import StrikethroughSIcon from '@mui/icons-material/StrikethroughS'
import CodeIcon from '@mui/icons-material/Code'
import FormatClearIcon from '@mui/icons-material/FormatClear'

import FormatButton from './format-button'
import ButtonToolTip from './button-tool-tip'

interface IProps {
  editor: Editor
}

const TextFormatButtons = ({ editor }: IProps): React.ReactElement => {
  const getVariant = (format: string): 'contained' | undefined => (editor.isActive(format) ? 'contained' : undefined)

  return <>
    <ButtonToolTip title="Bold">
      <FormatButton
        onClick={(): boolean => editor.chain().focus().toggleBold().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .toggleBold()
            .run()
        }
        variant={getVariant('bold')}
        sx={{ fontWeight: 800 }}
      >
        <FormatBoldIcon/>
      </FormatButton>
    </ButtonToolTip>
    <ButtonToolTip title="Italic">
      <FormatButton
        onClick={(): boolean => editor.chain().focus().toggleItalic().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .toggleItalic()
            .run()
        }
        variant={getVariant('italic')}
        sx={{ fontStyle: 'italic', fontFamily: 'Times New Roman !important', paddingTop: '8px', paddingRight: '18px' }}
      >
        <FormatItalicIcon/>
      </FormatButton>
    </ButtonToolTip>
    <ButtonToolTip title="Underline">
      <FormatButton
        onClick={(): boolean => editor.chain().focus().toggleUnderline().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .toggleUnderline()
            .run()
        }
        variant={getVariant('underline')}
      >
        <FormatUnderlinedIcon/>
      </FormatButton>
    </ButtonToolTip>
    <ButtonToolTip title="Strikethrough">
      <FormatButton
        onClick={(): boolean => editor.chain().focus().toggleStrike().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .toggleStrike()
            .run()
        }
        variant={getVariant('strike')}
        sx={{ fontWeight: 100 }}
      >
        <StrikethroughSIcon/>
      </FormatButton>
    </ButtonToolTip>
    <ButtonToolTip title="Code">
      <FormatButton
        onClick={(): boolean => editor.chain().focus().toggleCode().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .toggleCode()
            .run()
        }
        variant={getVariant('code')}
        sx={{ fontWeight: 100 }}
      >
        <CodeIcon/>
      </FormatButton>
    </ButtonToolTip>
    <ButtonToolTip title="Clear Formatting">
      <FormatButton
        onClick={(): boolean => editor.chain().focus().unsetAllMarks().run()}
      >
        <FormatClearIcon/>
      </FormatButton>
    </ButtonToolTip>
  </>
}

export default TextFormatButtons