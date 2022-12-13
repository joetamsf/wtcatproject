import { HOMECARD } from "../app/HOMECARD";
import HomeCards from "../components/home/HomeCards";

const HomePage = () => {
    return (
        <div className='home-container mb-3'>
            <div className='home-banner mt-3'>
                <div className='home-banner-content mt-4'>
                    <h2 className='home-h2'>They are crazy!</h2>
                    <h3 className='home-h3-ml3'>And they are Cute!</h3>
                    <h3 className='home-h3-ml4'>They are our family!</h3>
                    <h3 className='home-h3-ml5'>And they are Cats!</h3>
                </div>
            </div>
            <div className='mt-5 home-navigator'>
                <p className='nav-title1 home-fsize-35'>
                    What the Cat! project
                </p>
                <div className='nav-text mb-5'>
                    What the Cat! is a mini-website for sharing photos of cat in my family.
                    Here you can find tips from my experience to beginners who want to get a cat. 
                    Cat has changed our lives so many, hopefully you like the photos and tip in this website.
                </div>
                <HomeCards homecards={HOMECARD} />
            </div>
        </div>
    )

}

export default HomePage;