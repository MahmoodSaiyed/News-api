import React from 'react'

const Newsitem =(props)=> {
    let {description,title,imgurl,newsurl,date,author} = props

    return (
      <div>

        <div className="card" >
  <img src={imgurl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}...</p>
    <p className='card-text'>By {author} on {new Date(date).toGMTString()}</p>

    <a href={newsurl} target='blank' className="btn btn-dark">Read more</a>
  </div>
</div>
      </div>
    )
  
}
export default Newsitem
