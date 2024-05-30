import "../../App.css";

const Home = () => {

  const Background = "https://ukr.media/static/ba/aimg/4/4/5/445792_1.jpg"
  return (
    <section className='home' id='home' style={{
      backgroundImage: "url(" + "https://img.freepik.com/free-photo/mobile-phone-stethoscope-chart-file-desktop-mobile-medical-handheld-doctor-concepts_1387-455.jpg?t=st=1717002442~exp=1717006042~hmac=ee6a4830b9f2a9be9116aaf5625d63835b3a208ed3c21338f0c029f3648fa45e&w=1060" + ")",
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      height: "100vh",
      alignContent: "center",
      width: "100vw",
      textAlign: "center",
    }}>
        <h1 style={{textAlign: "center", color: "#f2f2f2"}}>Our mobile application for Android</h1>
        {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</p> */}
        <button className='about__button' onClick={() => console.log("connect")} style={{
          paddingRight: 30,
          paddingLeft: 30,
          paddingBottom: 15,
          paddingTop: 15,
          marginTop: 15,
          fontSize: 20
        }}><a href="#home" style={{fontWeight: "bold", color: "#fff"}} download="../myappcheckselfselfself-0.1-arm64-v8a_armeabi-v7a-debug.apk">Download now</a></button>

    </section>
  )
}

export default Home