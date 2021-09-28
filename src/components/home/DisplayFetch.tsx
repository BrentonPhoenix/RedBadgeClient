type PropType ={
    item: any
}

const DisplayFetch = (props:PropType) => {
    
        return(
            <div key={props.item.index}>
                <div><img src={props.item.url} alt={props.item.urlImageID}/></div>
                <div>{props.item.TopicTitle}</div>
                <div>{props.item.Keywords}</div>
            </div>
        )
    
}


export default DisplayFetch