import React from 'react'
import dynamic from 'next/dynamic'

const MdEditorPreview = dynamic(import('../misc/md-editor-preview'), {
  ssr: false,
})

export const Preview: React.FC<{ source: string }> = ({ source }) => (
  <MdEditorPreview source={source} />
)
