import React, {Fragment} from 'react';
import './Hamburger.css'


const HamburgerOpen = () => {


    return ( 
<Fragment>
        <ul className="servicesHam">
         <a href="#home"> <li className='liHam' >Services</li> </a>
         <a href="#home"> <li className='liHam'>Trade</li> </a>
         <a href="#home"> <li className='liHam' >NFT</li> </a>
        </ul>
   
</Fragment>

     );
}
 
export default HamburgerOpen;