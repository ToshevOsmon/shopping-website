import React from 'react';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import iphone from '../images/iphone.png'

const Home = () => {
    return (
        <div className="home">

            <div className="main">
                <div className="side1">
                    <h3>
                        GET THE NEW IPHONE 12 PRO
                    </h3>
                    <p>
                        A transformative triple-camera system that
                        adds tons of capability without complexity
                    </p>
                    <div className="buttons">
                        <a herf='#' className="button">By Now <ShoppingBasketIcon />
                        </a>
                        <a herf='#' className="button1">
                            With $599 with trade-in
                        </a>
                    </div>
                </div>

                {/* side1 */}
                <div className="side2">
                    <img src={iphone} alt="iphone 12 pro images" />
                </div>
            </div>

        </div>
    );
};


export default Home;