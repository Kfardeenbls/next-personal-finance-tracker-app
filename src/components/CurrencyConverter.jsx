"use client";

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { fetchCurrencyData } from "@/api/currencyApi";
import styles from "../style/CurrencyConverter.module.css";

const CurrencyConverter = () => {
  const exchangeRates = useSelector(
    (state) => state?.currencyConverter?.currencyData
  );

  console.log("exchangeRates", exchangeRates);

  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [convertedAmount, setConvertedAmount] = useState(0);

  useEffect(() => {
    fetchCurrencyData();
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
      <div className={styles.inputContainer}>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className={styles.inputField}
          placeholder="Amount"
        />

        <div className={styles.selectContainer}>
          <label htmlFor="fromCurrency">From:</label>
          <select
            id="fromCurrency"
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
            className={styles.selectField}
          >
            {exchangeRates &&
              Object.keys(exchangeRates).map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
          </select>
        </div>

        <span> to </span>

        <div className={styles.selectContainer}>
          <label htmlFor="toCurrency">To:</label>
          <select
            id="toCurrency"
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
            className={styles.selectField}
          >
            {exchangeRates &&
              Object.keys(exchangeRates).map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
          </select>
        </div>

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
    </div>
  );
};

export default CurrencyConverter;
