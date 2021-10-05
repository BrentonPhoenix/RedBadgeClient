

const DisplayMyTopics = (props: any) => {
    return(
        props.fetchReturn.map((current:any, index:any)=> {
            return(
                <div key={index}>
              <div>{current.url === ""? null: <img src={current.url} alt={current.urlImageID}/>}</div> 
                <div>{current.TopicTitle}</div>
                <div>{current.Keywords}</div>
            </div>
        )
    })
    )
}


export default DisplayMyTopics