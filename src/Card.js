import React from 'react';

const Card = () => {
    return (
        <div className="d-flex justify-content-around">
            {[1, 2, 3].map((item) => (
                <div className="card" style={{ width: "18rem" }} key={item}>
                    <img src="https://via.placeholder.com/150" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title {item}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Card;
