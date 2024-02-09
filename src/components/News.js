import React, { useEffect, useState } from 'react'
import Newsitem from './Newsitem'

const News = (props) => {

    const [articles, setarticles] = useState([])
    // const[page,setpage]=useState(1)

    const capitalizeFirstLetter = (string) =>{
        return string.charAt(0).toUpperCase() + string.slice(1);
    }


    const updatenews = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=65a98636e232486b8ae683c4c4385c20`
        let data = await fetch(url)
        let parseData = await data.json()
        setarticles(parseData.articles)
    }
    useEffect(() => {
       document.title=`${capitalizeFirstLetter(props.category)} -NEWS`
        updatenews();
    },)

    //    const handleNext = async () => {
    //       setpage(page+1)
    //       updatenews()
    //     }
    //    const handlePrivious = async () => {
    //         setpage(page-1)
    //         updatenews()
    //     }

    return (

        <div className='container my-3'>

            <h1 className='text-center my-7'>NEWS - {capitalizeFirstLetter(props.category)}</h1>
            <div className='row'>
                {articles.map((element) => {
                    return <div className='col-md-4' key={element.url}>
                        <Newsitem title={element.title} description={element.description}
                            imgurl={!element.urlToImage ? "https://static.vecteezy.com/system/resources/thumbnails/004/216/831/original/3d-world-news-background-loop-free-video.jpg" :
                                element.urlToImage} newsurl={element.url} date={element.publishedAt} author={!element.author ? "Unknown" : element.author} />
                    </div>
                })}

                {/* <div className='container d-flex justify-content-between'>
                        <button type="button" disabled={page <= 1} onClick={handlePrivious} className="btn btn-primary">Previous</button>
                        <button type="button" disabled={page >= 12}  onClick={handleNext} className="btn btn-primary">Next</button>


                    </div> */}

            </div>
        </div>






    )

}

export default News
