function Links(props) {
    
    return(
        <div>
           <ul>
                 {props.links.map((li,index) => {
                        return (
                            <li key={index}>{li}</li>
                        ) 
                 })}
            </ul> 
        </div>
    )
}

export default Links;