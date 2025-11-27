import React, { useEffect, useState } from "react";
import axios from "axios";

const Recipe = () => {
  const [quotes, setQuotes] = useState([]);
  const [randomQuote, setRandomQuote] = useState();
  //    useEffect(()=>{
  //     const fetchApi = async () => {
  //       await fetch("https://dummyjson.com/recipes")
  //         .then((res) => res.json())
  //         .then((data) => {
  //           setRecipe(data.recipes);
  //           console.log(data.recipes);
  //         });
  //     };
  //     fetchApi()
  //    }, [])

  useEffect(() => {
    const url = "https://dummyjson.com/quotes";
    const fetchData = async () => {
      const response = await axios.get(url);
       setQuotes(response.data.quotes)
       const index = Math.floor(Math.random() * response.data.quotes.length);
       setRandomQuote(response.data.quotes[index])
      //  console.log("result:  ", response.data.quotes[index]);   
    };
    fetchData();
  }, []);

  const handleQuotes = () => {
  const index = Math.floor(Math.random() * quotes.length);
  setRandomQuote(quotes[index]);
   
  };
  return (
    <>
      {randomQuote && (
        <div>
          <p>{randomQuote.author}</p>
          <p>{randomQuote.quote}</p>
          <button onClick={handleQuotes}>Random Quote</button>
        </div>
      )}
    </>
  );
};

export default Recipe;
