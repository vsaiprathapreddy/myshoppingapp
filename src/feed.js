import React from 'react';
import axios from 'axios';


export default class Feed extends React.Component{
    constructor(props){
    super(props)
        this.state={
            products:[],
            

        }

    }

    componentDidMount(){
        axios.get('https://api.chec.io/v1/products',{
            params:{
                limit: "25"
            },
            headers:{
                "X-Authorization": "pk_18520c5d60493087bc6a3b16c673b3ab41654bfbc5b5c"
            }
        }).then((response) =>{
            console.log(response)
            this.setState({
                products:response.data.data
                
              });

        }).catch((response) =>{
            

        })
        
    }
    render(){
        return(
            <div>
                <div>content</div>
                <div className="card" style={{width: "18rem"}}>
                <img src="" className="card-img-top" alt="..." />
                <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
                </div>
            </div>
        )
    }
    
}