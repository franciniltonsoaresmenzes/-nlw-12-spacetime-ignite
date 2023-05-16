import { CSSProperties } from 'react'

const style: CSSProperties = {
  color: 'red',
}

interface ButtonProps {
  title: string
}

export function Button(props: ButtonProps) {
  return <p style={style}>{props.title}</p>
}
