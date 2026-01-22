type Item = {
    startleft: number;
    endleft: number;
    starttop: number;
    endtop: number;
    color: string;
}
type ItemCover = {
    item1:Item
}
const TryItem = ({item1}: ItemCover) => {
    return <div style={{gridColumnStart: item1.startleft,gridColumnEnd: item1.endleft,gridRowStart: item1.starttop,gridRowEnd: item1.endtop,backgroundColor:item1.color}}></div>;
}
export default TryItem;
