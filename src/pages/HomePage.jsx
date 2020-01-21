import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import LoginBox from '../components/common/LoginBox';

const LeftSection = styled.div.attrs(props => ({
    className: "col-md-6",
}))`
    padding: 20px;
`;

const RightSection = styled.div.attrs(props => ({
    className: "col-md-6",
}))`
    padding: 50px;
`;

const DisplayWrapper = styled.div`
    padding: 10px;
    color: ${props => props.theme.textColor};
`;

const DisplaySection = () => {
    return (
        <>
            <DisplayWrapper>
                <h1>Overview</h1>
                <h6>Customer Communication capabilities leveraging the channels</h6>
                <h6>Capability to store different formats of templates used for communications</h6>
                <h6>Enhanced governance flow for Application Onboarding and User Access Managment</h6>
            </DisplayWrapper>
            <DisplayWrapper>
                <h1>What do we offer</h1>
                <h6>Customer Communication cap  abilities leveraging the channels</h6>
                <ul>
                    <li>Email</li>
                    <li>SMS</li>
                    <li>Mail</li>
                </ul>
                <h6>Capability to store different formats of templates used for communications</h6>
                <h6>Enhanced governance flow for Application Onboarding and User Access Managment</h6>
            </DisplayWrapper>
        </>
    )
}
const HomePage = () => {
    return (
        <div className="row">
            <LeftSection className="col-md-6"><DisplaySection /></LeftSection>
            <RightSection className="col-md-6"><LoginBox /></RightSection>
        </div>
    );
};
export default HomePage;
