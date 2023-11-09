import Dropdown from 'react-bootstrap/Dropdown';
import Image from 'react-bootstrap/Image';
import { NavLink } from 'react-router-dom';
import { Nav } from 'reactstrap';

const Footer = () => {
    
    const dropDownMenuStyle = {
        padding: '.5px'
    }

    const navItemStyle = {
        backgroundColor: 'gray', 
        border: '0px',
        padding: '10px',
        color: 'white',
    }

    return (
        <>
        <div className='footer2-container' style={{
            display: 'flex',
            flexWrap: 'wrap',
            backgroundColor: 'gray', 
            alignItems: 'center',
            justifyContent: 'center' 
        }}>
            <div className='buttongroup'>
                <Nav>                
                <NavLink className='nav-link footButtonGroup' style={navItemStyle} to='/'>Home</NavLink>
                <NavLink className='nav-link footButtonGroup' style={navItemStyle} to='/cats'>Cat</NavLink>
                <NavLink className='nav-link footButtonGroup' style={navItemStyle} to='/beginners'>Beginner</NavLink>
                <NavLink className='nav-link footButtonGroup' style={navItemStyle} to='/about'>About Me</NavLink>
                </Nav>
            </div>
            <div className='dropDownGroup'>
                <Dropdown align='start' id='footer2-donation-dw'
                    drop='up'
                    style={{
                            backgroundColor: 'gray',
                            border: '0px'
                    }}>
                        <Dropdown.Toggle style={{
                            backgroundColor: 'gray',
                            border: '0px'
                        }}
                            id="dropdown-donate">
                            Donate
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                        <Dropdown.Item style={dropDownMenuStyle} 
                            href="https://eastbayspca.org/get-involved/give-now/donate-now/" 
                            target="_blank"
                        >
                            <Image src='images/footer/scpaeb.png' rounded />
                        </Dropdown.Item>
                        <Dropdown.Item style={dropDownMenuStyle}
                            href="https://berkeleyhumane.org/donate/" 
                            target="_blank"
                        >
                        <Image src='images/footer/BerkeleyHumane.png' rounded/></Dropdown.Item>
                        </Dropdown.Menu>
                </Dropdown>
            </div>
            <div>
                <Dropdown align='start' id='footer2-adoption-dw'
                    drop='up'
                    style={{
                            backgroundColor: 'gray',
                            border: '0px'
                    }}>
                        <Dropdown.Toggle style={{
                            backgroundColor: 'gray',
                            border: '0px'
                        }}
                            id="dropdown-adopt">
                            Adopt
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                        <Dropdown.Item style={dropDownMenuStyle}
                            href="https://eastbayspca.org/adoptions/" 
                            target="_blank"        
                        >
                            <Image src='images/footer/scpaeb.png' rounded/>
                        </Dropdown.Item>
                        <Dropdown.Item style={dropDownMenuStyle}
                            href="https://berkeleyhumane.org/adopt/" 
                            target="_blank"
                        >
                            <Image src='images/footer/BerkeleyHumane.png' rounded/></Dropdown.Item>
                        </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
        <div className='jtsftprojects' 
                style={{
                    color: 'white',
                    backgroundColor: 'gray',
                    paddingBottom: '2px' 
        }}>
            2023 shinjtprojs
        </div>

    </>
    )
}

export default Footer;