import { useLoaderData } from "react-router-dom";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import { getLS } from "../../Utility/localStorage";
const Stats = () => {
    let donates = useLoaderData()
    let ls = getLS()
    let donated = donates.filter(obj => ls.includes(obj.id))
    // let allTotal = donates.reduce((acc, curr) => { return acc + curr.price }, 0)
    // let donatedTotal = donated.reduce((acc, curr) => { return acc + curr.price }, 0)
    let allTotal = donates.length;
    let donatedTotal = donated.length;
    let donatePercent = (donatedTotal * 100) / allTotal
    let leftToDonate = 100 - donatePercent
    let dataArr = [
        {
            name: "Donated",
            money: donatePercent
        },
        {
            name: "Total",
            money: leftToDonate
        }
    ]
    let colors = ["#00C49F", "#FF444A"]
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(1)}%`}
            </text>
        );
    };
    return (
        <div className="w-full md:w-fit mx-auto mb-48 py-12">
            <ResponsiveContainer width="100%" height={400}>
                <PieChart className="" width={200} height={200}>
                    <Pie
                        className="text-4xl font-bold"
                        label={renderCustomizedLabel}
                        data={dataArr}
                        color="#000000"
                        dataKey="money"
                        cx="50%"
                        cy="50%"
                        outerRadius={190}
                        fill="#8884d8"
                        labelLine={false}
                    >
                        {dataArr.map((entry, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={colors[index % colors.length]}
                            />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
            <div className="flex justify-center gap-8 md:gap-14 mt-8">
                <div className="flex items-center gap-2 md:gap-4">
                    <p className="text-regular text-sm md:text-lg ">Your Donation</p>
                    <div className="h-3 w-12 md:w-24 bg-[#00C49F] rounded-sm"></div>
                </div>
                <div className="flex items-center gap-2">
                <p className="text-regular text-sm md:text-lg ">Total Donation</p>
                    <div className="h-3 w-12 md:w-24 bg-[#FF444A] rounded-sm"></div>
                </div>
            </div>
        </div>
    );
};
//jdkfl
export default Stats;