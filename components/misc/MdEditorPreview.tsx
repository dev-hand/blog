import '@uiw/react-md-editor/markdown-editor.css'
import '@uiw/react-markdown-preview/markdown.css'
import React, { CSSProperties } from 'react'
import MdEditor from '@uiw/react-md-editor'
import { theme } from 'styles/theme'

const MdEditorPreview: React.FC<{
  source: string
  style?: CSSProperties
}> = ({ source, style }) => (
  <MdEditor.Markdown
    source={source}
    style={
      style
        ? style
        : {
            color: theme.color.black,
            backgroundColor: theme.color.white,
          }
    }
  />
)

export default MdEditorPreview
