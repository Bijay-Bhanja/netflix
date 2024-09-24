import Banner from "./components/Banner"
import CreateProfile from "./components/CreateProfile"
import Download from "./components/Download"
import Footer from "./components/Footer"
import FrequentlyAskedQuestion from "./components/FrequentlyAskedQuestion"
import TV from "./components/TV"
import WatchEverywhere from "./components/WatchEverywhere"
import "./index.css"
const App=()=>{
    return(
        <div>
            <Banner/>
            <TV/>
            <Download/>
            <WatchEverywhere/>
            <CreateProfile/>
            <FrequentlyAskedQuestion/>
            <Footer/>
        </div>
    )
}
export default App