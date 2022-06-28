import { MouseEventHandler } from 'react';

export interface CardProps {
  dataCy?: string
  children: React.ReactNode
  onClick: MouseEventHandler<HTMLDivElement>
  type?: 'secondary'
}
