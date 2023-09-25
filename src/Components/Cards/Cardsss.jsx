import { useEffect, useState } from "react";
import Card from "./Card";
import pt from 'prop-types'
const Cardsss = ({ text }) => {
    let [donatesss, setDonatesss] = useState([])
    let searchedDonates = donatesss.filter(obj => obj.catagory.toLowerCase() === text.toLowerCase())

    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setDonatesss(data))

    }, [])

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center px-8">
            {
                searchedDonates.length > 0 ?
                searchedDonates.map(donate => <Card
                    key={donate.id}
                    card={donate}
                ></Card>)
                :
                    donatesss.map(donate => <Card
                        key={donate.id}
                        card={donate}
                    ></Card>)
            }
        </div>
    );
};
Cardsss.propTypes = {
    text: pt.string,
}
export default Cardsss;