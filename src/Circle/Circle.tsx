import classNames from 'classnames'
import { forwardRef } from 'react'
import './Circle.css'

interface Props {
  color: string
  active?: boolean
  onClick: React.MouseEventHandler<HTMLDivElement>
  onKeyDown: React.KeyboardEventHandler<HTMLDivElement>
}

export const Circle = forwardRef<HTMLDivElement, Props>(
  ({ color, onClick, active, onKeyDown }, ref) => {
    return (
      <div
        ref={ref}
        onKeyDown={onKeyDown}
        tabIndex={0}
        onClick={onClick}
        className={classNames('circle', `circle-${color}`, {
          [`circle-${color}--active`]: active,
        })}
      />
    )
  }
)

Circle.displayName = 'Circle'
