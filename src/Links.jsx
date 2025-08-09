function Links(props) {
    
    return(
        <div>
           <ul className="lista" >
                 {props.links.map((li) => {
                        return (
                            <button>{li}</button>
                        ) 
                 })}
            </ul> 
        </div>
    )
}

export default Links;