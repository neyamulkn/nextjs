import Image from "next/image";
import styles from "./page.module.css";
import Slider from "./components/slider";
import Searchbar from "./components/searchbar";
import Reviews from "./components/reviews";
export default async function Home() {

  let getData = await fetch(process.env.base_url+"api/homepage", {cache:'no-store'});

  if(!getData){
    return "connection failed";
  }
  let sections = await getData.json();

  

  return (
      <section>
      
           {
           
              sections.data.map((section, index) => {
               
                if(section.section_type == "top-slider"){
                  return <div key={index}> <Slider data={section} />   </div>
                  
                }else if(section.section_type == "search-bar"){
                  return <div key={index}> <Searchbar data={section} />  </div>
                }else if(section.section_type == "reviews"){
                  return <div key={index}> <Reviews data={section} />  </div>
                }else{
                  
                }
               
             
              })
           }
        </section>
  );
}


