
const Homepage = async (params) => {
   
    let page_slug = params.params.slug;
    let getdata = await fetch(process.env.URL+"/page/"+page_slug, { cache: 'no-store'});
    let pageJsonRes = await getdata.json();
    let page = pageJsonRes.data;
    return (
        <section>
            {page.title}
            <div dangerouslySetInnerHTML={{ __html:page.description }} />
        </section>
    );
}

export default Homepage;