import React from 'react'
import dynamic from 'next/dynamic'

const MdEditorMarkdown = dynamic(import('../misc/md-editor-markdown'), {
  ssr: false,
})

export const Preview: React.FC<{ source: string }> = ({ source }) => (
  <MdEditorMarkdown source={source} />
)
