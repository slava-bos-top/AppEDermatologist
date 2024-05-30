import "../../App.css";
import about1 from "../../assets/photo1.jpg"
import about2 from "../../assets/photo2.jpg"
import about4 from "../../assets/photo4.jpg"
import about5 from "../../assets/photo5.jpg"
import about7 from "../../assets/photo7.jpg"
import about8 from "../../assets/photo8.jpg"
import about9 from "../../assets/photo9.jpg"
import about11 from "../../assets/photo11.avif"
import about12 from "../../assets/photo12.avif"

const Main = () => {

  return (
    <section className='main' id='main' style={{
    }}>
        <div className="container">
                <div className="row">
                    <div className="image img-1"><img src={about12}/></div>
                    <div className="image img-2"><img src={about8}/></div>
                    <div className="image img-3"><img src={about5}/></div>
                    <div className="image img-4"><img src={about11}/></div>
                    <div className="image img-5"><img src={about1}/></div>
                    <div className="image img-6"><img src={about9}/></div>
                    <div className="image img-7"><img src={about2}/></div>
                    <div className="image img-8"><img src={about7}/></div>
                    <div className="image img-9"><img src={about4}/></div>
                </div>
        </div>

    </section>
  )
}

export default Main