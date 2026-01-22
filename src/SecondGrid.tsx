
import {SecondGridItem} from './SecondGridItem';
export const SecondGrid = () => {
    return <><div style={{marginTop:'0px',display:'Grid',gridTemplateColumns:'repeat(6,100px)',gridTemplateRows:'repeat(6,100px)'}}>
        <SecondGridItem item={{startcol:1,startrow:1,endcol:2,endrow:2,col:'red'}} />
        <SecondGridItem item={{startcol:1,startrow:2,endcol:2,endrow:3,col:'blue'}} />
        <SecondGridItem item={{startcol:1,startrow:3,endcol:2,endrow:4,col:'green'}} />
        <SecondGridItem item={{startcol:1,startrow:4,endcol:2,endrow:5,col:'yellow'}} />
        <SecondGridItem item={{startcol:2,startrow:1,endcol:3,endrow:2,col:'orange'}} />
        <SecondGridItem item={{startcol:2,startrow:2,endcol:3,endrow:3,col:'purple'}} />
        <SecondGridItem item={{startcol:2,startrow:3,endcol:3,endrow:4,col:'brown'}} />
        <SecondGridItem item={{startcol:3,startrow:1,endcol:4,endrow:2,col:'brown'}} />
        {/* #7FFF00 */}
        </div></>;
}
