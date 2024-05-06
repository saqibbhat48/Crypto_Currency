import React, { useState, useEffect } from 'react';

const Dashboard = () => {
    const [data, setData] = useState([]);
    const [load, setLoad] = useState(true);
    const [loadedCryptos, setLoadedCryptos] = useState(10);

    async function fetchCryptos() {
        const url = 'https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '496d76f1bcmsh3a528487fa981bcp115454jsncfd9b30ac39f',
                'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            setData(result.data.coins);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchCryptos();
        setTimeout(() => {
            setLoad(false);
        }, 2000);
    }, []);

    const loadMoreCryptos = () => {
        setLoadedCryptos(prevCount => prevCount + 10);
    };

    return (
        <>
            {load ? (
                <div className='min-h-[79vh]'>
                    <h1 className='flex gap-2 justify-center font-bold text-2xl p-8'>Loading <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-black"></div></h1>
                </div>
            ) : (
                <>
                    <h1 className='bg-violet-400 text-2xl sm:text-3xl lg:text-4xl text-center pt-10 font-bold '>Top 50 CryptoCurrencies in the world</h1>
                    <div className='flex flex-wrap gap-5 justify-center p-10 bg-violet-400'>
                        {data.slice(0, loadedCryptos).map((d) => {
                            return (
                                <div key={d.uuid} className='w-72 bg-white p-4 flex gap-10 hover:scale-105 duration-300 ease-linear'>
                                    <div>
                                        <h1 className='flex gap-3 text-2xl font-bold  justify-center'>{d.symbol}<img src={d.iconUrl} alt="" width={30} /></h1>
                                        <div className='mt-4'>
                                            <p className='font-bold mb-2'>{d.rank}.{d.name}</p>
                                            <p>Price : {d.price}</p>
                                            <p>MarketCap : {d.marketCap}</p>
                                            <p>Daily Change : {d.change}%</p>
                                        </div>
                                    </div>
                                    <div style={{ backgroundColor: d.color }} className='w-4 h-full'></div>
                                </div>
                            );
                        })}
                    </div>
                    {loadedCryptos < data.length && (
                        <div className="flex justify-center my-4">
                            <button className="bg-violet-700 hover:bg-white hover:text-violet-700 text-white duration-500 ease-linear font-bold py-2 px-4 rounded" onClick={loadMoreCryptos}>Load More</button>
                        </div>
                    )}
                </>
            )}
        </>
    );
};

export default Dashboard;
