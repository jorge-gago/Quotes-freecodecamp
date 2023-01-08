import Styles from './App.module.css'
import { QuoteBox } from "./component/QuoteBox/QuoteBox";

function App() {
  return (
    <div className={Styles.App}>
      <QuoteBox />
    </div>
  );
}

export default App;
