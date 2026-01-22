import TryItem from './TryItem';
const TryGrid = ()=>{
    return <><div style={{display: 'grid',gridTemplateRows:'repeat(6,100px)',gridTemplateColumns:'100px 100px 100px 100px 100px 100px',gridGap:'1em',gridTemplateAreas:"'area1 area1' 'main aside' 'footer footer'"}}>
        <TryItem item1={{startleft: 1,endleft: 2,starttop: 1,endtop: 2,color: 'blue'}} />
        <TryItem item1={{startleft: 1,endleft: 2,starttop: 2,endtop: 3,color: 'red'}} />
        <TryItem item1={{startleft: 2,endleft: 4,starttop: 1,endtop: 3,color: 'yellow'}} />
        <TryItem item1={{startleft: 4,endleft: 5,starttop: 1,endtop: 3,color: 'green'}} />
        <div style={{gridArea:'3 / 1 / 5 / 3', backgroundColor: 'purple'}}></div>
        <div style={{gridArea:'5 / 3 / -1 / -1' , backgroundColor: 'orange'}}></div>
        <div style={{gridArea:'2 / 2 / 4 / 4' ,zIndex:1, backgroundColor: '#919282ff'}}></div>
        </div></>
}
export default TryGrid;
