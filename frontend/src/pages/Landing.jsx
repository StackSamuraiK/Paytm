import image1 from "../assets/image1.png"
import image2 from "../assets/image2.png"
import image3 from "../assets/image3.png"
import image4 from "../assets/image4.png"
import { Link } from "react-router-dom"
import { Homebar } from "../components/Homebar"

export const Landing = () =>{
    return <div >
            <Homebar/>
        <div className="flex flex-col pt-6 ">
            <div className="flex justify-end">
                
            </div>
            <div className="">
                <img src={image1} alt="poster" />
            </div>
            <div>
                <img src={image2} alt="poster" />
            </div>
            <div>
                <img src={image4} alt="poster" />
            </div>
            <div>
                <img src={image3} alt="poster" />    
            </div>
        </div>
        </div>
}