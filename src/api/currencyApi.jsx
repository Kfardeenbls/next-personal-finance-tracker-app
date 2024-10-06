import { setCurrencyData } from "@/redux/slice/CurrencyConverterSlice";
import store from "@/redux/store";

// Server component, fetches data on the server side (SSR)
export const fetchCurrencyData = async () => {
  const apiKey = process.env.NEXT_PUBLIC_EXCHANGE_RATE_API_KEY;
  const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;

  try {
    const response = await fetch(apiUrl, {
      next: { revalidate: 60 }, // Revalidate every 60 seconds (similar to getStaticProps)
    });

    const data = await response.json();

    // Dispatch the fetched data to Redux store
    store.dispatch(setCurrencyData(data.conversion_rates));
  } catch (error) {
    console.error("Error fetching currency data:", error);
  }
};
