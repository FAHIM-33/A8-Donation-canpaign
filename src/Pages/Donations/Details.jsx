import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useLoaderData, useParams } from "react-router-dom";
import { setLS } from "../../Utility/localStorage";



const Details = () => {
    let { id } = useParams();
    id *= 1
    let data = useLoaderData()
    let idData = data.find(obj => obj.id === id)
    const handleClick = () => {
        setLS(id)
    }
    return (
        <div>
            <figure className="relative rounded-xl overflow-hidden mb-14">
                <img className="w-full rounded-lg -mt-16 -mb-8" src={idData.image} alt="" />
                <div className="absolute bottom-0 bg-[#0B0B0B80] p-9 w-full">
                    <button
                    onClick={handleClick}
                        className="text-white rounded-[4px] text-xl font-semibold py-4 px-6"
                        style={
                            { backgroundColor: idData.text_color }
                        }
                    >Donate ${idData.price}</button>
                </div>
            </figure>
            <div>
                <h2 className="text-regular text-4xl font-bold mb-6">{idData.title}</h2>
                <p className="text-[#0B0B0BB2] mb-24">{idData.description}</p>
            </div>
            <ToastContainer/>
        </div>
    );
};

export default Details;