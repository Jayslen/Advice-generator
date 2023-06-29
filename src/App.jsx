import { useState, useEffect } from 'react'
import diceIcon from './assets/icon-dice.svg'
import decoration from './assets/pattern-divider-desktop.svg'
const API = 'https://api.adviceslip.com/advice'
function App () {
  const [quote, setQuote] = useState(false)
  const fechtQuote = () => {
    fetch(API)
    .then((res) => res.json())
    .then((data) => setQuote(data.slip))
  }
  useEffect(() => {
    fechtQuote()
  }, [])
  return (
    <>
      <main className='w-screen h-screen grid place-content-center'>
        <section>
          <article className='grid gap-4 max-w-md bg-[#313a49] px-5 pt-10 pb-14 rounded-2xl relative'>
            <p className='text-xs tracking-widest text-[#52fca8] font-bold  text-center'>ADVICE <span className='tracking-normal'>#{quote ? quote.id : ''}</span></p>
            <span className='text-3xl font-bold text-white text-center block'>{quote && quote.advice}
            </span>

            <img src={decoration} alt='decoration' />
            <button
              className='absolute -bottom-5 bg-[#53ffaa] p-3 rounded-full left-1/2 -translate-x-1/2 cursor-pointer hover:bg-[#91ffca] hover:shadow-2xl hover:shadow-[#53ffab] transition-all' onClick={fechtQuote}
            >
              <img src={diceIcon} alt='dice-icon.svg' />
            </button>
          </article>

        </section>
      </main>
    </>
  )
}

export default App
