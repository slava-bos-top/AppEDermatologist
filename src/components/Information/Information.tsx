import { useState } from "react";
import "../../App.css";
import { listDesease, listDesease2, listDesease3 } from "./deaseas";

const Information = () => {
  const [list, setList] = useState(listDesease)
  const [list2, setList2] = useState(listDesease2)
  const [list3, setList3] = useState(listDesease3)

  const Background = "https://ukr.media/static/ba/aimg/4/4/5/445792_1.jpg"
  return (
    <section className='information' id='information'>
        <h1 id="informationheader" style={{paddingBottom: 30, textAlign: "center"}}>Information</h1>
        <div className="info">
          {list.map((dis, index) => (
            <div className="infoBlock" key={index}>
              <h2 style={{marginBottom: 10}}>{dis.name}</h2>
              <p style={{marginBottom: 7}}>{dis.info}</p>
              <p>{dis.treat}</p>
            </div>
          ))}
        </div>
        <div className="info">
          {list2.map((dis, index) => (
            <div className="infoBlock" key={index}>
              <h2 style={{marginBottom: 10}}>{dis.name}</h2>
              <p style={{marginBottom: 7}}>{dis.info}</p>
              <p>{dis.treat}</p>
            </div>
          ))}
        </div>
        <div className="info">
          {list3.map((dis, index) => (
            <div className="infoBlock" key={index}>
              <h2 style={{marginBottom: 10}}>{dis.name}</h2>
              <p style={{marginBottom: 7}}>{dis.info}</p>
              <p>{dis.treat}</p>
            </div>
          ))}
        </div>
    </section>
  )
}

export default Information