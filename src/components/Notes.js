import React from 'react';

class Notes extends React.Component{
    render(){
        var data= this.props.header==='OverView'?this.props.data.details:this.props.data
        return(
            <div><h1>{this.props.header}</h1>
                 {data}
            </div>
        )
    }
}
export default Notes;