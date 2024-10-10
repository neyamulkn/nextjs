const Homepage = async () => {
    let getdata = await fetch(process.env.URL+"/page/contact");
    let contactJson = await getdata.json();
    let contact = contactJson.data;
    return (
        <section>
            Contact page
           <div dangerouslySetInnerHTML={{ __html: contact.description }} />
        </section>
    );
}

export default Homepage;