import React from 'react';
import Data from './Notes';

class Description extends React.Component{
    render(){
        var Description='';
        if(this.props.descriptionData==='Data'){
           Description=<Data header={this.props.descriptionData} data={this.props.data.Data}/>
        }else if(this.props.descriptionData==='Messages'){
           Description=<Data header={this.props.descriptionData} data={this.props.data.Message}/>
        }else if(this.props.descriptionData==='Notes'){
            Description=<Data  header={this.props.descriptionData} data={this.props.data.Notes}/>
        }else{
            Description=<Data header={this.props.descriptionData ===''?'Overview':this.props.descriptionData} data={this.props.data.OverView}/>
        }
        return(
            <div>
                {Description}
            </div>
        )
    }
}
export default Description;