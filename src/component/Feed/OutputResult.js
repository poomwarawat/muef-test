import React from 'react';
import {Row, Col} from 'reactstrap'

const OutputResult = (props) => {
    const results = props.result
    console.log(results)
    return (
        <div>
            {results && <div>
                <Row>
                    <Col md={3}>
                        <h3>INH Score : {results[0].INH}</h3>                        
                    </Col>
                    <Col md={3}>
                        <h3>SHF Score : {results[1].SHF}</h3>                        
                    </Col>
                    <Col md={3}>
                        <h3>EC Score : {results[2].EC}</h3>                        
                    </Col>
                    <Col md={3}>
                        <h3>WM Score : {results[3].WM}</h3>                        
                    </Col>
                    <Col md={3}>
                        <h3>PO Score : {results[4].PO}</h3>                        
                    </Col>
                </Row>
            </div>}
        </div>
    );
}

export default OutputResult;
