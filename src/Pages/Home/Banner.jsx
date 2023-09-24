
const Banner = () => {
    return (
        <div className="pb-32 pt-16 mb-24"> 
            <h1 className="text-5xl font-bold text-regular text-center">I Grow By Helping People In Need</h1>
            <section className="flex justify-center items-center mt-10">
                <input className="w-4/12 py-4 rounded-l-lg px-4 outline-none border border-[#DEDEDE]" type="text" placeholder="Search here...."/>
                <button className="font-semibold py-4 bg-[#FF444A] text-white rounded-r-lg px-7">Search</button>
            </section>
        </div>
    );
};

export default Banner;