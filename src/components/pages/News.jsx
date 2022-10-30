import { useEffect, useState } from "react"
import '../../App.css'
export default function News(){
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
                        <div class="card mb-3" style={{maxWidth: "100%"}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src={item.image_url} class="img-fluid rounded-start" alt={item.title}/>
      
    </div>
    <div class="col-md-8">
        
      <div class="card-body">
      <img className="newsPic" src={item.publisher.logo_url} alt={item.publisher.name} />
        <h5 class="card-title">[{`${item.tickers}`}] - {item.title}</h5>
        
        <p class="card-text">{item.description}</p>
        
        
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
const renderNews = () => {
    if (loading) {
        return <p>Loading...</p>;

        }
        if (error) {
        return <p>{error}</p>;
        }
     return(
        <div>
            
        </div>

     )
    }
    return(
        <body>
        <div className="news">

        {loading && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}

         
            {renderData()}
        
        
        </div>
        <div>
            <p className="text">NEWS</p>
        </div>
     </body>   
    )

}
