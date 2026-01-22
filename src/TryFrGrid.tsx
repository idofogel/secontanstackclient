import TryItem from './TryItem';
const TryFrGrid = () => {
    return <div style={{display:'grid',gridTemplateRows:'100px 100px 100px',gridTemplateColumns:'1fr 4fr 1fr'}}>
        <TryItem item1={{startleft: 1,endleft: 3,starttop: 1,endtop: -1,color: 'blue'}} />
    </div>;
}
export default TryFrGrid;