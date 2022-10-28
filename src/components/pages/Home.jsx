import { useEffect, useState } from "react"

export default function Home(){
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
useEffect(() => {
    // console.log(`api key fdsfsdfsd ${ process.env.REACT_APP_API_KEY}`)
    const apiKey = process.env.REACT_APP_API_KEY
    fetch(`https://api.polygon.io/v2/reference/news?apiKey=${apiKey}`)
    .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }  
        return response.json();
    })
    .then((actualData) => {
        setData(actualData.results);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setData(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
// data.map((item, index) => {
//     <div>
//         <h1>{item.tickers}</h1>
//         <h1>{item.title}</h1>
//         <p>{item.publisher}</p>
//         <p>{item.description}</p>
//         <p>{item.article_url}</p>
//         <p>{item.image_url}</p>
//         <p>{item.published_utc}</p>

//     </div>
// })
console.log(data)
const renderData = () => {
    if (loading) {
        return <p>Loading...</p>;
        }
        if (error) {
        return <p>{error}</p>;
        }
        if (data) {
            return data.map((item, index) => {
                return (
                    <div key={index}>

                        <a href={item.article_url} target="_blank" rel="noreferrer">
                        <h1> [ {item.tickers} ] - {item.title}</h1>
                        </a>
                        <a href={item.publisher.homepage_url}>
                        <p>{item.publisher.name}</p> 
                        <img styles={{width: '20px'}} src={item.publisher.logo_url} alt={item.publisher.name} />
                        </a>
                        
                        <h3>{item.description}</h3>
                        <img src={item.image_url} alt={item.title} styles={{width:'50px'}}/>
                        <a href={item.article_url} target="_blank" rel="noreferrer">Read More</a>
                        <p>{item.published_utc}</p>                        
                        
                    </div>
                )
            })
        }
    }
    return(
        <div className="App">
        <h1>Home</h1>
        {loading && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      <ul>
      {renderData()}
      </ul>
      </div>
    )
}