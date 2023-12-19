import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import AboutImage from "./Components/Pages/App/AboutImage";
import AboutText from "./Components/Pages/App/AboutText";
import DownloadResume from "./Components/Pages/App/DownloadResume";
import MoreInfo from "./Components/Pages/App/MoreInfo";

function App() {
  return (
    <>
      <h1 className="text-xl text-center text-accent">
        ঘুমানোর আনন্দ আর ভোর দেখার আনন্দ একসাথে পাওয়া যায় না।
      </h1>
      <div className="mt-16 flex gap-4">
        <div className="w-1/2">
          <AboutText />
        </div>
        <div className="w-1/2 flex flex-col items-start">
          <div className="flex flex-col justify-center w-full">
            <div className="h-[60vh] bg-shadow mx-5">
              <div className="h-full w-full mt-2 ml-2 bg-shadow overflow-hidden">
                <AboutImage />
              </div>
            </div>
            <div className="flex justify-center">
              <DownloadResume />
            </div>
          </div>
        </div>
      </div>
      <MoreInfo />
    </>
  );
}

export default App;
