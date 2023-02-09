import PDFFile from "./assets/Overview_-_PIX_Simulator.pdf";
import { Iframe } from "./styles";

function App() {
  return (
    <div>
      <object data={PDFFile} type="appliation/pdf">
        <Iframe src={PDFFile}></Iframe>
      </object>
    </div>
  );
}

export default App;
