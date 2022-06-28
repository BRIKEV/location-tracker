import { MouseEventHandler } from 'react';

export interface CardProps {
  children: React.ReactNode
  onClick: MouseEventHandler<HTMLDivElement>
  type?: 'secondary'
}
