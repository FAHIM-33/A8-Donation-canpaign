import { useLoaderData } from "react-router-dom";
import { Cell, Pie, PieChart } from "recharts";
import { getLS } from "../../Utility/localStorage";

const Stats = () => {
    let donates = useLoaderData()
    let ls = getLS()
    let donated = donates.filter(obj => ls.includes(obj.id))

    let allTotal = donates.reduce((acc, curr) => { return acc + curr.price }, 0)
    let donatedTotal = donated.reduce((acc, curr) => { return acc + curr.price }, 0)
    let dataArr = [
        {
            name: "Donated",
            money: donatedTotal
        },
        {
            name: "Total",
            money: allTotal
        }
    ]
    let colors = ["#00C49F","#FF444A"]

    return (
        <div>
            <PieChart width={700} height={700}>
                <Pie
                    data={dataArr}
                    color="#000000"
                    dataKey="money"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={120}
                    fill="#8884d8"
                >
                    {dataArr.map((entry, index) => (
                        <Cell
                            key={`cell-${index}`}
                            fill={colors[index % colors.length]}
                        />
                    ))}
                </Pie>

            </PieChart>
        </div>
    );
};

export default Stats;