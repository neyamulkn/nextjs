import Image from "next/image";

export default async function name(params)  {
    const result = await fetch(process.env.URL+"/page/about") ;
    let pageJson = await result.json();
    let page = pageJson.data;

    return (
        <section>
            {page.title}
            
            <div dangerouslySetInnerHTML={{ __html:page.description }} />
            {
                page.get_sections.map((section, index) => {
                    if(section.get_section_items.length>0){
                        return (
                        <div className="row" key={index}>
                            {section.title}
                            <p>{section.sub_title}</p>
                            <p>Under page</p>
                            {
                            section.get_section_items.map((section_item, subindex) => {
                                return (
                                <div key={subindex} className="col-md-4">
                                <p>{section_item.title}</p> 
                                <Image src={process.env.ASSET_URL+"/page/"+section_item.image} alt={section_item.title} width="100" height={100} />
                                </div>
                                )
                                
                            })
                            }
                        </div>
                        )
                    }else{
                        return (
                          <div key={index}>
                            {section.title}
                          </div>
                        )
                      }
                })
                
             }
          </section>
    );
}

export const  metadata = {
  title: "about",

}
