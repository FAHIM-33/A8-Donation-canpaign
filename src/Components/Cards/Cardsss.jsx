import { useEffect, useState } from "react";
import Card from "./Card";

const Cardsss = () => {
    let [donatesss, setDonatesss] = useState([])
    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setDonatesss(data))
    }, [])
    return (
        <div className="grid grid-cols-4 gap-6 justify-center">
            {
                donatesss.map(donate => <Card
                    key={donate.id}
                    card={donate}
                ></Card>)
            }
        </div>
    );
};

export default Cardsss;