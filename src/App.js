import { useState } from "react";
import './App.css';
import html2canvas from "html2canvas";
import logo from "./img/logo/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import downloadIcon from "./img/iconos/download.png";

function App() {
  
  const [linea1, setLinea1] = useState("");
  const [linea2, setLinea2] = useState("");
  const [img, setImg] = useState("Bob");

  const onChangeLinea1 = function (evento) {
    setLinea1(evento.target.value)
  }

  const onChangeLinea2 = function (evento) {
    setLinea2(evento.target.value)
  }
  
  const onChangeImg = function (evento) {
    setImg(evento.target.value)
  }

  const onClickExportar = function (evento) {

    html2canvas(document.querySelector("#meme")).then(canvas => {
      alert("exportando");
      var img = canvas.toDataURL("image/png");
      var link = document.createElement("a");
      link.download = "meme.png";
      link.href = img;
      link.click();
  });
  }
  
  return (
    
    <div className="App">
      <select className="select-css" onChange={onChangeImg}>
        <option value="Bob">Bob</option>
        <option value="Gato">Gato</option>
        <option value="Pepe">Pepe</option>
        <option value="Philosoraptor">Philosoraptor</option>
        <option value="Toy story">Toy story</option>
      </select>
      <div className="contForm"> 
      <div>
      <input className="form-control form-control-sm border" onChange={onChangeLinea1} type="text" placeholder="Linea 1"/>
      <input className="form-control form-control-sm border"  onChange={onChangeLinea2} type="text" placeholder="Linea 2"/>
      </div>
      
      <button className="btn btn-light button" onClick={onClickExportar}><img className="icono" src={downloadIcon}/></button>
      </div>
     

      <div className="contMeme" id="meme">
        <span className="linea1">{linea1}</span>
        <span className="linea2">{linea2}</span>
        <img src={`../memes/${img}.jpg`}/>
      </div>
      <div className="contLogo">
        <img 
          src={logo} 
          className="logo"/>
      </div>

    </div>
  );
}

export default App;
