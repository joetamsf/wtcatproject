import { BEGINNERS } from "../app/BEGINEERS";
import BeginnersGuide from "../components/beginners/BeginnersGuide";
import { useState, useEffect } from 'react';

const Beginners = () => {

    const [ width, setWidth] = useState(45);

    const getDim = () => {
        const currentWidth = window.innerWidth
        if (currentWidth > 700) {
            setWidth(45);
        } else {
            setWidth(100);
        }
    }

    useEffect(() => {
        window.onresize = getDim;
    }, [width]);

    return (
        <div style={{
            margin: 'auto',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: 'auto'
            }}
            className='d-flex flex-wrap mt-5 mb-5'
        >
        <div className='beginner-banner-border mb-3'
            style={{width: '90%'}}
        >
            <p className='home-fsize-45'>Beginners</p>
            <div className='cat-banner-text'>
                <p className='home-fsize-20'>Congratulations and Welcome to world of Cats</p>
                <p className='home-fsize-20'>Even if you are thining about to get a cat</p>
                <p className='home-fsize-20'>Click below icons, Get some tips!</p>
            </div>
            </div>
            <div className='beginner-div d-flex flex-wrap mt-3 mb-3'>
            <BeginnersGuide beginners={BEGINNERS} />
            </div>
        </div>


    )
};

export default Beginners;