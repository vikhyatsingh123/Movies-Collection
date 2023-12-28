import Card from "../Cardnew";
import data from "../../Database/data";
const HollywoodWeb = () => {
  return (
    <>
    <Search/>
      {/* Card 1 */}
      {data.map((single)=>{
      if(single.type=="webseries"&& (single.genre=="hollywood"||single.genre=="Hollywood"))
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

export default HollywoodWeb;
