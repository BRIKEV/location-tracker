export interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  children: React.ReactNode
  type?: 'primary' | 'secondary' | 'light'
}
