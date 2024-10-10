import Image from "next/image";

const country = async () => {
    const getData = await fetch(process.env.base_url+"api/page/home/country-specialists");
    const getDataJson = await getData.json();
    return(
        <div className="row gy-4">
            {
                getDataJson.data.countries.map((country, index) => (
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6" key={index}>
                    <div className="country-section-card">
                        <div className="country-flip-box-layer country-flip-box-front">
                            <div className="country-image">
                                <a href="#"> <Image src={process.env.base_url+country.image} alt="" width={312} height={260} /></a>
                                <div className="flag-icon">
                                    <Image src={process.env.base_url+country.flag} alt="" width={50} height={50} />
                                </div>
                            </div>
                            <div className="country-card-content">
                                <h4>{country.name}</h4>
                                <p>{country.notes}</p>
                            </div>
                        </div>
                        <div className="country-flip-box-layer country-flip-box-back">
                            <div className="overly">
                                <div className="cart-area">
                                    <div className="content-top">
                                        <div className="flag-icon">
                                            <Image src={process.env.base_url+country.flag} alt="" width={50} height={50} />
                                        </div>
                                        <h4>Schengen</h4>
                                        <p>Tourist and Business Visa</p>
                                        <p>We understand your need verya deliver digital marketing through specialists one position.</p>
                                    </div>
                                    <div className="contact-button">
                                        <div className="chat-us-btn">
                                            <a href="#">Chat With Us</a>
                                        </div>
                                        <div className="whatsup-icon">
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                ))
            }
        </div>
    )
}

export default country