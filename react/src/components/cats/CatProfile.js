const CatProfile = (props) => {
    const { age, special, location } = props.profile;

    return (
        <>
            <div className='catLocation catProfile'>
                <p style={{ textAlign: 'left' }}>Location: {location}</p>
            </div>
            <div className='catAge catProfile'>
                <p style={{ textAlign: 'left' }}>Age: {age}</p>
            </div>
            <div className='catSpecial catProfile'>
                <p style={{ textAlign: 'left' }}>Special: {special}</p>
            </div>
        </>
    )
}

export default CatProfile;