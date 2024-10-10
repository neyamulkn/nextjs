const reviews = async (props) => {
  const getreviews = await fetch("https://phpstack-1312572-4916907.cloudwaysapps.com/api/page/home/reviews", {cache:"no-store"});
  const reviews = await getreviews.json();

  return ( 
    <div className={ (props.data.layout_width) ? "container-fluid" : 'container'} style={{ background:props.data.background_color, color:props.data.text_color }}>
    <div className="row" >
      {
      reviews.data.reviews.map((review, index) => {
        return (
          <div key={index} className="col-4 jumbotron" >
          <h1 className="display-4">{review.user}</h1>
          <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
          <hr className="my-4"/>
          <p>{review.content}</p>
          <p className="lead">
          <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
          </p>
          </div>
        )
      })
    }
    </div>
    </div>
  )
}

export default reviews;