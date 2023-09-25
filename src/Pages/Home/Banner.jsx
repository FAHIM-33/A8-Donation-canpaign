
import { useState } from 'react';
import Cardsss from '../../Components/Cards/Cardsss';
import './banner.css'

const Banner = () => {
    let [text, setText] = useState('')
    function getWord() {
        
        console.log('called function')
        let searchWord = document.getElementById('search-input').value;
        setText(searchWord)
    }
    function enterKey() {
        document.querySelector('.banner input').addEventListener('keyup', (event) => {
            if (event.key === 'Enter') {
                getWord()
            }
        })
    }
    return (
        <div>
            <div className="banner pb-52 pt-16 mb-24">
                <h1 className="text-5xl font-bold text-regular text-center">I Grow By Helping People In Need</h1>
                <section className="flex justify-center items-center mt-10">
                    <input onClick={enterKey} id='search-input' className="w-4/12 py-4 rounded-l-lg px-4 outline-none border border-[#DEDEDE]" type="text" placeholder="Search here...." />
                    <button onClick={getWord} className="font-semibold py-4 bg-[#FF444A] text-white rounded-r-lg px-7">Search</button>

                </section>
            </div>
            <Cardsss
                text={text}
            ></Cardsss>
        </div>
    );
};

export default Banner;