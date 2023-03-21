import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const DataContext = createContext()

export const DataContextProvider = ({ children }) => {
    const [leto, setLeto] = useState({})
    const [data, setData] = useState([])
    const [headline, setHeadline] = useState("electricity")
    const [topstories, setTopstories] = useState([])
    useEffect(() => {
        axios
          .get(
            `https://newsapi.org/v2/everything?q=norway+${headline}&sortBy=publishedAt&apiKey=${process.env.REACT_APP_api_KEY}`
          )
          .then((response) => {
            const filterData = response.data.articles.filter(article => article.author && article.urlToImage)
            setData(filterData);
          });
      }, [headline]);

    useEffect(() => {
        axios
        .get(
          `https://newsapi.org/v2/everything?q=electricity&sortBy=
          publishedAt&apiKey=${process.env.REACT_APP_api_KEY}`
        )
        .then((response) => {
            const filterData = response.data.articles.filter(article => article.author && article.urlToImage)
          setTopstories(filterData);
        }); 
    }, [])

    return(
        <DataContext.Provider value={{ leto, setLeto, headline, setHeadline, data, setData, topstories}}>
            {children}
        </DataContext.Provider>
    )
}

export const DataAuth = () => {
    return useContext(DataContext)
}