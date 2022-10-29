import { useEffect, useState } from "react"
import '../../App.css'
export default function Home(){
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [gainers, setGainers] = useState(null);
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

  useEffect(() => {
    const apiKey = process.env.REACT_APP_API_KEY
    fetch(`https://api.polygon.io/v2/snapshot/locale/us/markets/stocks/gainers?apiKey=${apiKey}`)
    .then((response) => {
        if (!response.ok) {
            throw new Error(
            `This is an HTTP error: The status is ${response.status}`
            );
        }
        return response.json();
    })
    .then((actualData) => {
        setGainers(actualData);
        console.log('gainers', actualData);
        setError(null);
    })
    .catch((err) => {
        setError(err.message);
        setGainers(null);
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

                        {/* <a href={item.article_url} target="_blank" rel="noreferrer">
                        <h2 > <img className="newsPic" src={item.publisher.logo_url} alt={item.publisher.name} /> [ {item.tickers} ]  -  {item.title}</h2>
                        </a>                        
                        <h3>{item.description}</h3>
                        <img src={item.image_url} alt={item.title} />
                        <a href={item.article_url} target="_blank" rel="noreferrer">Read More</a>
                        <p>{item.published_utc}</p>                         */}
                        <div className="row row-cols-2 row-cols-md-2 g-4">
                            <div className="col">
                             <div className="card">
                                <img src={item.image_url} className="card-img-top" alt={item.title}/>
                                <img className="newsPic" src={item.publisher.logo_url} alt={item.publisher.name} />
                                 <div className="card-body">
                                    
                                    <h5 className="card-title">[ {item.tickers} ]  -  {item.title}</h5>
                                   
                                    <p className="card-text">{item.description}</p>
                                    <a href={item.article_url} target="_blank" rel="noreferrer" className="btn btn-dark">Read More</a>
                                    <p className="card-text"><small className="text-muted">{item.published_utc}</small></p>
                                 </div>
                            </div>
                        </div>
                    </div>
                   </div>
                )
            })
        }
    }
const renderGainers = () => {
    if (loading) {
        return <p>Loading...</p>;
        }
        if (error) {
        return <p>{error}</p>;
        }
        if (gainers) {
            return gainers.tickers.map((item, index) => {
                return (
                    <div key={index}>
                       <table className="table table-dark table-striped">
                       <tr className="table-dark">{item.ticker}
                       <td className="table-dark">{item.todaysChangePerc}</td>
                       </tr>

                        </table>
                       </div>
                )
            })
        }
    }


    return(
        <body>
        <div className="App">

        {loading && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}

        {data && (
            <div>
                {renderData()}
            
            <div class="tradingview-widget-container">
            <div class="tradingview-widget-container__widget"></div>
            </div>
            </div>
            
        
        )}

        </div>

     </body>   
    )

}
