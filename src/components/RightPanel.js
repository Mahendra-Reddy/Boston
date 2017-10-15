import React from 'react';
import BotttomPanel from './BottomPanel'
class RightPanel extends React.Component {
    render() {
        var itemDetails = this.props.selectedItem === '' ? '' : <Details details={this.props.selectedItem} />
        return (
            <div>
                {itemDetails}
            </div>
        )
    }
}
class Details extends React.Component {
    render() {
        return (
            <div>
                <img className="roundedImage" src={this.props.details.img} />
                <div className="fontcolor">{this.props.details.name}</div>
                <div className="fontcolor">{this.props.details.Age}</div>
                <div className="fontcolor">{this.props.details.Gender}</div>
                <div className="fontcolor">{this.props.details.Location}</div>
                <div className="fontcolor">{this.props.details.Email}</div>
                <div className="fontcolor">{this.props.details.Phone}</div>
                <div className="fontcolor">{this.props.details.Dob}</div>
                <div><BotttomPanel data={this.props.details} /></div>
            </div>
        )
    }
}
module.exports = RightPanel;