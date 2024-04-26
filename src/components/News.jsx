import React, { useEffect } from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Navbar from "./Navbar";
import Footer from "./Footer";

const News = () => {
  const [news, setNews] = useState([]);
  const [load, setLoad] = useState(true)

  async function cryptoNews() {
    const url = "https://cryptocurrency-news2.p.rapidapi.com/v1/coindesk";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "496d76f1bcmsh3a528487fa981bcp115454jsncfd9b30ac39f",
        "X-RapidAPI-Host": "cryptocurrency-news2.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setNews(result.data);
      
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    cryptoNews()
    setTimeout(() => {
      setLoad(false)
    }, 1200);
    setLoad(true)
  }, []);

  return (
    <>
    <Navbar/>
    {load ? <h1 className='flex gap-2 justify-center font-bold text-2xl p-8'>Loading <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-black"></div></h1> :
     <div className="p-8">
     {news.map((news) => (
       <div key={uuidv4()} className="bg-white p-4 mb-10">
         <div className="gap-4 md:flex md:justify-between">
           <h1 className="text-xl font-bold md:text-2xl lg:text-4xl mb-4">
             {news.title}
           </h1>
           <img src={news.thumbnail} alt="" width={300} />
         </div>
         <p className="mt-4">{news.description}</p>
         <a
           href={news.url}
           className="text-blue-700 font-semibold underline hover:text-blue-900"
           target="_main"
         >
           More
         </a>
         <p className="mt-4 text-right">{news.createdAt}</p>
       </div>
     ))}
   </div>
    }
   
    <Footer/>
    </>
  );
  
};

export default News;


