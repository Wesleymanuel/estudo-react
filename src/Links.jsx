function Links(props){
    return(
        <div>
            <ul>
                {props.links.map ((link , index) =>{
                    return (
                        <li key={index} >{link}</li>
                    )
                    
                })}
            </ul>
        </div>    
    )
}
export default Links;