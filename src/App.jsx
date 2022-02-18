/* eslint no-eval:0 */
import React, { useState } from 'react'
import words from 'lodash.words'
import './App.css'
import calculator from './assets/calculator.svg'
import Result from './components/Result'
import MathOperations from './components/MathOperations'
import Numbers from './components/Numbers'
import Functions from './components/Functions'
import Illustration from './components/Illustration'

const App = () => {

  const [stack, setStack] = useState('')
  const items = words(stack, /[^-^+^*^/]+/g)
  const value = items.length > 0 ? items[items.length -1] : '0'
  const onClickOperationFunction = operation => setStack(`${stack}${operation}`)

  const onClickEqualFunction = () => setStack(eval(stack).toString())

  const onContentClearFunction = () => setStack('') 

  const onDeleteFunction = operation => {
    if (stack.length > 0) {
      const newStack = stack.substring(0, stack.length - 1)
      setStack(newStack)
    }
  }

  const onClickNumberFunction = number => setStack(`${stack}${number}`)
  
  return (
    <main>
      <Illustration image={calculator} alt={'Illustration'} />
      <div className='react-calculator'>
          <Result value={value} />
          <Numbers onClickNumber={onClickNumberFunction} />
          <Functions onContentClear={onContentClearFunction} onDelete={onDeleteFunction} />
          <MathOperations onClickOperation={onClickOperationFunction} onClickEqual={onClickEqualFunction} />
      </div>
    </main>
  )
}

export default App 