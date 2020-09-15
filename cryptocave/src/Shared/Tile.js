import styled from 'styled-components';
import {subtleBoxShadow, greenBoxShadow, color, redBoxShadow} from "./Styles";

export const Tile = styled.div`
   background-color: ${color};
    padding: 10px;
`

export const SelectableTile = styled(Tile)`
   &:hover {
       cursor: pointer;
       ${greenBoxShadow}
   }
`