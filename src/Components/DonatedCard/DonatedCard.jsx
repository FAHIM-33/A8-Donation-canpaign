import pt from 'prop-types'
import { NavLink } from 'react-router-dom';
const DonatedCard = ({ donates }) => {
    let { id, image, title, catagory, price, catagory_bg, card_bg, text_color } = donates;


    return (
        <div className='rounded-lg flex flex-col mx-auto w-fit md:w-full md:flex-row overflow-hidden'
            style={{ backgroundColor: card_bg }}>
            <figure className='w-full overflow-hidden  z-10'>
                <img className='w-full h-full block' src={image} alt="" />
            </figure>
            <div
                className='p-6 w-full flex flex-col'>

                <p
                    className="font-medium text-sm rounded-sm w-max py-1 px-2 mb-1"
                    style={{ color: text_color, backgroundColor: catagory_bg }}
                >{catagory}</p>
                <h2 className='font-semibold text-2xl'>{title}</h2>
                <h2
                    className='font-semibold flex-grow'
                    style={{ color: text_color }}
                >${price}</h2>
                <NavLink to={`/details/${id}`}>
                    <button
                        className='text-lg font-semibold px-4 py-2 text-white rounded-[4px] w-fit'
                        style={{
                            backgroundColor: text_color
                        }}
                    >View Details</button></NavLink>
            </div>
        </div>
    );
};
DonatedCard.propTypes = {
    donates: pt.object,
}
export default DonatedCard;