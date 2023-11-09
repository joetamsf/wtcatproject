import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination } from "swiper";
import chibiImg from '../imgs/chibi_sample3.jpeg';
import ebscpaImg from '../imgs/eb_scpa.jpg';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
//import CatTabs from '../components/CatTabs';
import CatTabs from '../components/CatTabs';
import { Row, Col, Container } from 'reactstrap';
import { CATS } from '../app/CATS';


const CatsPage = () => {
    
    return (
        <>
        <div style={{
            margin: 'auto',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: 'auto'
            }}
            className='d-flex flex-wrap mt-5 mb-5'
        >
        <div className='cat-banner-border mb-3'
            style={{width: '90%'}}
        >
            <p className='home-fsize-45'>Cat Albums</p>
            <div className='cat-banner-text'>
                    <p className='home-fsize-20'>Introducing Chibi, Heart, Naughty and Ben</p>
                    <p className='home-fsize-20'>They are so different, even some of them are real siblings</p>
                    <p className='home-fsize-20'>Read their stories, Have a look on their photos</p>
             </div>
        </div>
        </div>
        <Container className='mb-5 mt-5 catsPageContainer'>
            <CatTabs />
        </Container>
        </>
    )
};

export default CatsPage;