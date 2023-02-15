import '@uiw/react-md-editor/markdown-editor.css'
import '@uiw/react-markdown-preview/markdown.css'
import React from 'react'
import styled from 'styled-components'
import MdEditor from '@uiw/react-md-editor'

const MdEditorPreview: React.FC<{
  source: string
}> = ({ source }) => <Markdown source={source} />

const Markdown = styled(MdEditor.Markdown)`
  color: ${(p) => p.theme.color.black};
  background-color: ${(p) => p.theme.color.white};
  img {
    width: 100%;
  }
`

export default MdEditorPreview
