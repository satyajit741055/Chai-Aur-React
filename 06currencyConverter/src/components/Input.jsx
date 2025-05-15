import React from 'react'
import { useId } from 'react'
import '../index.css'

const Input = ({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = 'usd',
  amountDisable = false,
  currencyDisable = false,
  className = '',
}) => {
  const amountInputId = useId()

  return (
    <div className="bg-gray-50 p-4 rounded-xl flex gap-4 items-end shadow-md">
      <div className="w-1/2">
        <label
          htmlFor={amountInputId}
          className="block text-xs font-medium text-gray-500 mb-1"
        >
          {label}
        </label>
        <input
          id={amountInputId}
          className="w-full text-sm  rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 disabled:opacity-60"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
        />
      </div>

      <div className="w-1/2">
        <label
          htmlFor={`${amountInputId}-currency`}
          className="block text-xs font-medium text-gray-500 mb-1"
        >
          Currency Type
        </label>
        <select
          id={`${amountInputId}-currency`}
          className="w-full text-sm  rounded-md border border-gray-300 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 disabled:opacity-60 cursor-pointer"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default Input