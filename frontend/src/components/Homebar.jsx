import { Link } from "react-router-dom"

export const Homebar = () =>{
    return <div className="shadow h-14 flex justify-between">
    <div className="flex flex-col justify-center h-full ml-4">
        <img className="flex h-14" src="https://www.logo.wine/a/logo/Paytm/Paytm-Logo.wine.svg" alt="logo" />
    </div>
    <div className="flex">
        <div className="flex flex-col justify-center h-full mr-4">
            
        </div>
        <div className="flex justify-center flex-col">
        <Link to={"/signup"}>
        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"> Sign In</button>
        
        </Link>
        </div>
    </div>
</div>
}