import { Box } from '@mui/material';
type Coords = {
    item:{
        startcol:number;
        startrow:number;
        endcol:number;
        endrow:number;
        col: string;
    }
}
export const SecondGridItem = ({item}: Coords) => {
    return <><Box sx={{gridColumnStart:item.startcol,gridRowStart:item.startrow,gridColumnEnd:item.endcol,gridRowEnd:item.endrow,backgroundColor:item.col}}></Box></>
}