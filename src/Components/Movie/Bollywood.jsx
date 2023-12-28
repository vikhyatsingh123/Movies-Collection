import Card from "../Cardnew";
import data from "../../Database/data";
import Search from "antd/es/input/Search";

const Bollywood = () => {
  return (
    
    <>
    <Search/>
   {data.map((single)=>{
      if(single.type=="movie"&& (single.genre=="bollywood"||single.genre=="Bollywood"))
      {
        return(
          <>
            <Card title={single.title} img={single.img} description={single.description} contributor={single.contributor} link={single.link}/>
          </>
        )
      }
     })} 
    </>
  );
};

export default Bollywood;
