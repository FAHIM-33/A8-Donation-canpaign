import pt from 'prop-types'
import { Link } from 'react-router-dom';
const Card = ({ card }) => {
    let { id, image, title, catagory, catagory_bg, card_bg, text_color } = card;
    return (
        <Link to={`/details/${id}`}>
            <div className='rounded-lg overflow-hidden '>
                <figure>
                    <img className='w-full' src={image} alt="" />
                </figure>
                <div className='p-4' style={{ backgroundColor: card_bg }}>
                    <p
                        className="font-medium text-sm rounded-sm w-fit py-1 px-2 mb-1"
                        style={{ color: text_color, backgroundColor: catagory_bg }}
                    >{catagory}</p>

                    <h2
                        className='font-semibold text-xl'
                        style={{ color: text_color }}
                    >{title}</h2>
                </div>
            </div>
        </Link>
    );
};
Card.propTypes = {
    card: pt.object,
}
export default Card;