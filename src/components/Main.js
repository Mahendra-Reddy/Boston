require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Store from '../flux/Stores/store';
import Actions from '../flux/Actions/action';
import RightPanel from './RightPanel'

var AppComponent = React.createClass({
  getInitialState() {
    return Store.getState();
  },

  componentDidMount() {
    Store.listen(this.onChange);
    this.initializeAllActions();
  },

  initializeAllActions() {
    Actions.getDefaultData();
  },

  onChange(state) {
    this.setState(state)
  },
  onClick(p) {
    this.setState({
      selectedItem: p
    })
  },
  render() {
    var listItems = this.state.defaultData.map((p) =>
      <div key={p.id.toString()} onClick={() => this.onClick(p)} >
        <div>
          <img className="roundedImage" src={p.img} />
          <span className="leftpanel">
          {p.name}
          
          </span>

        </div>
      </div>
    )
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4 co1-md-4 col-sm-4 col-xs-12">{listItems}</div>
          <div className="col-lg-8 co1-md-8 col-sm-8 col-xs-12">
            <RightPanel selectedItem={this.state.selectedItem !== undefined ? this.state.selectedItem : ''} />
          </div>
        </div>
      </div>
    );
  }
});

export default AppComponent;
