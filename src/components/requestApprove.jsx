import React from 'react';
import styled from 'styled-components';
import CustomizedButtons from './common/Button';

const Wrapper = styled.div`
    .textBox {
        border: 1px solid green;
        padding: 20px;
    }
    p {
        text-align: center;
        padding: 30px;
    }
    .buttonAlign {
        display: flex;
        justify-content: space-between;
    }

`;

export default () => {

    const handleClose = () => {

    }
    return(
        <Wrapper>
        <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-4">
                <div className="textBox">
                    <p>
                    Approval text here
                    </p>
                    <div className="buttonAlign">
                    <CustomizedButtons OnClick={handleClose} value="Approve" />
                    <CustomizedButtons OnClick={handleClose} value="Reject" />
                    </div>
                </div>
            </div>
            <div className="col-md-3"></div>
        </div>
        </Wrapper>
    )
}