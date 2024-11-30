import { useMemo, useState } from "react"

const Expence = () => {
 const [data,setData] = useState([
     {name:"bread3",price:60},
    {name:"bread1",price:40},
    {name:"bread2",price:50},
    {name:"bread2",price:50},
    {name:"bread2",price:50},
    {name:"bread3",price:60},
    {name:"bread4",price:90},
 ]);
 const total = useMemo(()=>{
    let sum=0;
    for(let i=0;i<data.length;i++){
       sum+=data[i].price;
    }
    return sum;
 })
 console.log(total);
return (
    <div>
        <h1>{total}</h1>
    </div>
  )
}

export default Expence