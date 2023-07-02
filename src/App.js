import React, {useState, useEffect} from "react"
import Data from "./Data";
const App = () => {

  const url = "https://jsonplaceholder.typicode.com/posts";

  const [showData, setShowData] = useState([]);

  const loadData = () => {
    fetch(url,{
      method : "GET"
    }).then(res => res.json())
    .then(result => {
      if(result) {
        setShowData(result);
      }
    }).catch(err => {
      console.log(err)
    })
  }
  

  useEffect(()=>{
    loadData();
  }, [])
  return(
    <div className="container">

      <h5 style={{color: "white",textAlign: "Center", height: "100px", justifyContent: "Center", display: "flex", lineHeight: "100px", backgroundColor: "orangered"}}>React Accordian</h5> 
      <div className="row"> 
        {showData.map((item, index) => (
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12" key = {index}>
            <Data {...item}/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;