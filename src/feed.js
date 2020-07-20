import React from 'react';
import axios from 'axios';
import Loader from './loading'
;

export default class Feed extends React.Component{
    constructor(props){
    super(props)
        this.state={
            products:[],
            loading:true,
            // totalItems=0,
            // totalValue =0
            
            

        }

    }

    componentDidMount(){
        //getting products
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
                products:response.data.data,
                loading:false
                
              });

        }).catch((error) =>{
            console.log(error)
        })
        
    }   
    render(){
        
        const{ products,loading,} = this.state;
        return(
            <div>
                {
                loading ? (<Loader/>):null }
                <div>
                <button type="button" class="btn btn-primary">
                Profile <span class="badge badge-light">9</span>
                <span class="sr-only">unread messages</span>
                </button>
                </div>
                
                    <div style={{display:"flex",flexWrap:"wrap"}}>
                    {
                        products.map((product) => {
                            return(
                                <div>
                                <div className="card" style={{width: "18rem",height:"500px",padding:"4px"}}>
                                <img style={{height:"140px"}}src={product.media.source} className="card-img-top" alt="..." />
                                <div className="card-body">
                            <h5 className="card-title">{product.name}</h5>
                                <p className="card-text"  dangerouslySetInnerHTML={{__html: product.description}}></p>
                                <div>
                                    <span className="badge badge-success price">{product.price.formatted_with_symbol}</span>
                                </div>
                                <button className="btn btn-primary"onClick={() => { this.addItemToCart(product.id) }}>Add to cart</button>
                                </div>
                            
                            </div>
                            </div>
                    
                            )
                        })
                        
                    }
                    </div>
            </div>        
        )
        
    }    
}