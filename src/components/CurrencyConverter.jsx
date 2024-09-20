"use client";
import React, { useState, useEffect } from "react";
import styles from "../style/CurrencyConverter.module.css";

const CurrencyConverter = () => {
  const [exchangeRates, setExchangeRates] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const fetchExchangeRates = async () => {
    try {
      const response = await fetch(
        "https://v6.exchangerate-api.com/v6/57b70bd1104b305fb6203bb1/latest/USD"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch exchange rates");
      }
      const data = await response.json();
      setExchangeRates(data.conversion_rates);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchExchangeRates();
  }, []);

  const convertCurrency = () => {
    if (exchangeRates[fromCurrency] && exchangeRates[toCurrency]) {
      const rate = exchangeRates[toCurrency] / exchangeRates[fromCurrency];
      setConvertedAmount(amount * rate);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Currency Converter</h2>
      {loading && <p>Loading exchange rates...</p>}
      {error && <p className={styles.error}>{error}</p>}
      {!loading && !error && (
        <>
          <div className={styles.inputContainer}>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className={styles.inputField}
              placeholder="Amount"
            />
            <select
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
              className={styles.selectField}
            >
              {Object.keys(exchangeRates).map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
            <span> to </span>
            <select
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)}
              className={styles.selectField}
            >
              {Object.keys(exchangeRates).map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
            <button onClick={convertCurrency} className={styles.button}>
              Convert
            </button>
          </div>
          {convertedAmount > 0 && (
            <div className={styles.convertedAmount}>
              <h3>
                Converted Amount: {convertedAmount.toFixed(2)} {toCurrency}
              </h3>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default CurrencyConverter;
