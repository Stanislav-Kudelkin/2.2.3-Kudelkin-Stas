import { useState, useRef, useEffect } from 'react'
import './App.css'
import { Circle } from './Circle/Circle'

function App() {
  const [isActive, setIsActive] = useState('red')

  const redRef = useRef<HTMLDivElement>(null)
  const orangeRef = useRef<HTMLDivElement>(null)
  const greenRef = useRef<HTMLDivElement>(null)

  const handleCircle = (color: string) => {
    setIsActive(color)
  }

  useEffect(() => {
    redRef.current?.focus()
  }, [])

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLDivElement>,
    color: string
  ) => {
    if (event.key === 'Enter') {
      setIsActive(color)
    }

    if (event.key === 'Tab') {
      event.preventDefault()

      if (color === 'red') orangeRef.current?.focus()
      if (color === 'orange') greenRef.current?.focus()
      if (color === 'green') redRef.current?.focus()
    }
  }
  return (
    <div className="semaphore-container">
      <div className="semaphore-item">
        <Circle
          ref={redRef}
          onKeyDown={(event) => handleKeyDown(event, 'red')}
          onClick={() => handleCircle('red')}
          color="red"
          active={isActive === 'red'}
        />
      </div>
      <div className="semaphore-item">
        <Circle
          ref={orangeRef}
          onKeyDown={(event) => handleKeyDown(event, 'orange')}
          onClick={() => handleCircle('orange')}
          color="orange"
          active={isActive === 'orange'}
        />
      </div>
      <div className="semaphore-item">
        <Circle
          ref={greenRef}
          onKeyDown={(event) => handleKeyDown(event, 'green')}
          onClick={() => handleCircle('green')}
          color="green"
          active={isActive === 'green'}
        />
      </div>
    </div>
  )
}

export default App
