import React from 'react';
import SmartWatches from '../JSON/smartwathes.json'

const SmartWatch = () => {
    return (
        <div className="smartwatch">
            <div className="titles">
                <p>Explore Awesome Products</p>
                <h4>Recommended For You</h4>
            </div>
            <div className="cards">
                {
                    SmartWatches.map((post) => {
                        return (
                            <div className="prodactCard" key={post.id}>
                                <img src={post.img} alt={post.name} />
                                <p>{post.name}</p>
                                <div className="price">
                                    {post.sum}
                                </div>
                            </div>
                        )
                    })
                }

            </div>
            <span className="buttonArea">
                <a href="#" className="exploreBtn">Explore Other Products</a>
            </span>

        </div>
    );
};


export default SmartWatch;