

class Prices extends React.Component{


    state={
        currency : "USD"
    }

    render(){
 
        const {bpi} = this.props

        return(
            <div>
                <ul className="list-group">
                    <li className="list-group-item">
                        <h4>{bpi.USD.description}</h4>
                        <span className="badge badge-primary">{bpi.USD.code}</span>
                        <strong>{bpi.USD.rate}</strong>
                    </li>
                </ul>
            </div>
        )
    }
}


export default Prices