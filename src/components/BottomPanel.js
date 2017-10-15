import React from 'react';
import Description from './Description'

class BottomPanel extends React.Component {
    constructor() {
        super();
        this.state = {
            Label: ''
        }
    }
    onClick(p) {
        this.setState({
            Label: p
        })
    }
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 bottomHeader" onClick={() => this.onClick('Overview')}>OverView</div>
                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 bottomHeader" onClick={() =>this.onClick('Data')}>Data</div>
                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 bottomHeader" onClick={() =>this.onClick('Messages')}>Messages</div>
                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 bottomHeader" onClick={() =>this.onClick('Notes')}>Notes</div>
                </div>
                <Description  descriptionData={this.state.Label} data={this.props.data}/>
            </div>
        )
    }
}
export default BottomPanel;