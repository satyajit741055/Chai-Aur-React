import { useState } from 'react'
import Input from './components/input'
import './index.css'
import useCurrencyInfo from './hooks/useCurrencyinfo'
import { RefreshCw } from 'lucide-react'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('inr')
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <div
      className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 px-4"
    >
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-2xl p-8 backdrop-blur-sm">
        <h1 className="text-2xl font-bold text-center text-gray-700 mb-6">Currency Converter</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            convert()
          }}
        >
          <div className="mb-4">
            <Input
              label="From"
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setFrom(currency)}
              selectCurrency={from}
              onAmountChange={
                (amount)=>{
                  if(amount<0) alert( "amount Cannot be negative")
                    setAmount(amount)
                }
              }
            />
          </div>

          <div className="flex justify-center my-4">
            <button
              type="button"
              className="flex items-center gap-2 border border-gray-300 hover:bg-gray-100 transition px-4 py-2 rounded-lg text-sm"
              onClick={swap}
            >
              <RefreshCw className="w-4 h-4" /> Swap
            </button>
          </div>

          <div className="mb-6">
            <Input
              label="To"
              amount={convertedAmount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setTo(currency)}
              selectCurrency={to}
              amountDisable
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl transition"
          >
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </form>
      </div>
    </div>
  )
}

export default App
