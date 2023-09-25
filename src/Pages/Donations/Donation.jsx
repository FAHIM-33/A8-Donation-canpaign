import { useLoaderData } from "react-router-dom";
import { getLS } from "../../Utility/localStorage";
import DonatedCard from "../../Components/DonatedCard/DonatedCard";
import { useEffect, useState } from "react";


const Donation = () => {
    let [sliced, setSliced] = useState([])
    let [donated, setDonated] = useState([])
    let [isShowAll, setIsShowAll] = useState(true)

    let data = useLoaderData();


    useEffect(() => {
        let lsID = getLS();
        let donated = data.filter(obj => lsID.includes(obj.id))
        setDonated(donated)
        setSliced(donated.slice(0, 4))
    }, [data])

    const handleBtn = () => {
        setSliced(donated)
        setIsShowAll(false)
    }

    return (
        <div className="mb-0 md:mb-48 px-0 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 justify-center gap-6 mt-10 md:mt-20">
                {
                    sliced.map(object => <DonatedCard
                        key={object.id}
                        donates={object}
                    ></DonatedCard>)
                }
            </div>
            {
                donated.length > 4 && isShowAll && <button
                    onClick={handleBtn}
                    className="bg-[#009444] text-center block mx-auto mt-10 px-7 py-3 text-white rounded-lg font-semibold"
                >Show All</button>
            }

        </div>
    );
};

export default Donation;