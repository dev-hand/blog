import React from 'react'
import dynamic from 'next/dynamic'

const MdEditorMarkdown = dynamic(import('../misc/MdEditorPreview'), {
  ssr: false,
})

export const Preview: React.FC<{ source: string }> = ({ source }) => (
  <MdEditorMarkdown source={source} />
)
