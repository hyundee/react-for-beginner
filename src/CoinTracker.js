import { useEffect, useState } from "react";

const CoinTracker = () => {
  const [Loading, setLoading] = useState(true);
  const [Coins, setConins] = useState([]);
  const [Price, setPrice] = useState(0);
  const [Dollor, setDollor] = useState(0);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setConins(json);
        setLoading(false);
      });
  }, []);

  const onChange = (event) => setDollor(event.target.value);
  const onSelect = (event) => setPrice(event.target.value);
  return (
    <div>
      <h1>The Coins! {Loading ? null : `(${Coins.length})`}</h1>
      {Loading ? (
        <strong>Loading...</strong>
      ) : (
        <select onChange={onSelect}>
          <option>Select Coin</option>
          {Coins.map((coin, idx) => (
            <option key={idx} value={coin.quotes.USD.price}>
              {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
      <hr />
      <div>
        <label htmlFor="">USD </label>
        <input
          value={Dollor}
          onChange={onChange}
          type="number"
          placeholder="Please enter dollor"
        />
        <input
          value={Dollor === 0 ? "" : Dollor / Price}
          type="number"
          placeholder="You can get..."
          readOnly
        />
      </div>
    </div>
  );
};

export default CoinTracker;
