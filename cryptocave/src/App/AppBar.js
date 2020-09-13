import React from 'react';
import styled from 'styled-components';

const Bar = styled.div`
    display: grid;
    grid-template-columns: 180px auto 100px 100px 100px 100px;
`

export default function(){
    return <Bar> 
        <div>CryptoCave</div>
        <div></div>
        <div>News</div>
        <div>MyCoins</div>
        <div>Search</div>
        <div>Investment Advisor</div>

         </Bar>
}