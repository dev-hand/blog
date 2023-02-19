import React, { CSSProperties } from 'react'
import dynamic from 'next/dynamic'

const MdEditorMarkdown = dynamic(import('../misc/MdEditorPreview'), {
  ssr: false,
})

export const Preview: React.FC<{ source: string; style?: CSSProperties }> = ({
  source,
  style,
}) => <MdEditorMarkdown source={source} style={style} />
