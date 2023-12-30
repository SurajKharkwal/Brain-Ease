import { Landing } from "./Components/Landing/Landing"
import { Navigation } from "./Components/Navigation/Navigation"

export default function Home() {
  return (
    <div className="w-full h-full text-white ">
      <div className="shine absolute top-0 left-[25%] w-[25%] h-[25vh] "></div>
      <div className="shine absolute top-0 left-[25%] w-[25%] h-[25vh] "></div>
      <div className="shine absolute top-[90vh] right-10 w-[25%] h-[25vh] "></div>
      <div className="shine absolute top-[90vh] right-10 w-[25%] h-[25vh] "></div>
      <Navigation />
      <Landing />
    </div>
  )
}
