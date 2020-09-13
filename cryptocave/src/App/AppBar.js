import React from 'react';
import styled, {css} from 'styled-components';
import {AppContext} from './AppProvider';

const Bar = styled.div`
    display: grid;
    margin-bottom: 60px;
    grid-template-columns: 180px auto 100px 100px 100px 100px;
`
const ControlButtonElem = styled.div`
cursor: pointer;
${props => props.active && css`
color: #95e445;
`}
`
function ControlButton({name, active}){
return (
    <AppContext.Consumer>
       {({page, setPage}) => (
<ControlButtonElem 
    active={page === name}
    onClick={()=> setPage(name)}
    >
{name}
</ControlButtonElem>)}
</AppContext.Consumer>
)
}

export default function(){
    return <Bar> 
        <div></div>
        <div></div>
        <ControlButton  name="News"/>
        <ControlButton name="MyCoins"/>
        <ControlButton name="Search"/>
        <ControlButton name="Investment Advisor"/>


        

         </Bar>
}