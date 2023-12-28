import Card from "../Cardnew";
import data from "../../Database/data";
import Search from "antd/es/input/Search";
const Hollywood = () => {
  return (
    <>
    <Search/>
{data.map((single)=>{
      if(single.type=="movie"&& (single.genre=="hollywood"||single.genre=="Hollywood"))
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

export default Hollywood;
