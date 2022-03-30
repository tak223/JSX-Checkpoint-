
import './App.css';
import image from "./imageInSrc.png";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <div className="App2" style={{border:"solid 1px black",maxwidth:"100vw"}}>
     <h1 className="title red">takwa </h1>
      <img src={image}  alt="myimage"   />
      <img src="/imageInPublic.png"  alt="myimage"/>
      </div>
  </div>
            );
}

            export default App;
