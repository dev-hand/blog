import '@uiw/react-md-editor/markdown-editor.css'
import '@uiw/react-markdown-preview/markdown.css'
import React from 'react'
import MdEditor from '@uiw/react-md-editor'
import { theme } from 'styles/theme'

const MdEditorPreview: React.FC<{
  source: string
}> = ({ source }) => (
  <MdEditor.Markdown
    source={source}
    style={{ color: theme.color.black, backgroundColor: theme.color.white }}
  />
)

export default MdEditorPreview
