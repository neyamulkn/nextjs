import Image from "next/image";

const slider = async (props) => {
    return (
        
        <div id={"carouselExampleControls"+props.data.id} className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
                {
                props.data.get_section_items.map((slider, index) => {
                    return (

                    <div key={index} className={"carousel-item "+(index == 0 ? 'active' : '')}>
                    <Image src={process.env.base_url+slider.image} alt="image" className="d-block w-100" width={1000} height={500} style={{ height:'100%' }} />
                    </div>
                          
                    )
                })
            }
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target={"#carouselExampleControls"+props.data.id} data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target={"#carouselExampleControls"+props.data.id} data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
        </div>
                            
    )
}

export default slider;