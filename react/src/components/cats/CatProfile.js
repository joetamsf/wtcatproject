const CatProfile = (props) => {
    const { birth, special, location } = props.profile;

    /*
        8.64e+7 refer to the milliseconds of a day
    */
    const realAge = Math.floor((Date.now() - new Date(birth)) / (8.64e+7 * 365)); 

    return (
        <>
            <div className='catLocation catProfile'>
                <p style={{ textAlign: 'left' }}>Location: {location}</p>
            </div>
            <div className='catAge catProfile'>
                <p style={{ textAlign: 'left' }}>Age: {realAge}</p>
            </div>
            <div className='catSpecial catProfile'>
                <p style={{ textAlign: 'left' }}>Special: {special}</p>
            </div>
        </>
    )
}

export default CatProfile;