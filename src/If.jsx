function If({nome, isPacked}) {

    if(isPacked){
        return(
            <li className="li">{nome} **</li>
        )
    }
    else{
        return(
            <li className="li" >{nome} </li>
        )
    }

}

export default If;