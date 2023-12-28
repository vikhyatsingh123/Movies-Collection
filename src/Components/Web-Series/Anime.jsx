import Card from "../Cardnew";
import data from "../../Database/data";
import Search from "antd/es/input/Search";
const BollywoodTV = () => {
  return (
    <div>
     {data.map((single)=>{
      if(single.type=="anime")
      {
        return(
          <>
            <Card title={single.title} img={single.img} description={single.description} contributor={single.contributor} link={single.link}/>
          </>
        )
      }
     })} 
       
    </div>
  )
}

export default BollywoodTV
