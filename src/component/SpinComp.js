import React from 'react';
import {Spinner} from 'reactstrap'

const SpinComp = () => {
    return (
        <div>            
            <div className="spinner-space">            
                <div>
                    <Spinner type="grow" color="primary" />
                    <Spinner type="grow" color="secondary" />
                    <Spinner type="grow" color="success" />
                    <Spinner type="grow" color="danger" />
                    <Spinner type="grow" color="warning" />
                    <Spinner type="grow" color="info" />
                </div>
            </div>
        </div>
    );
}

export default SpinComp;
