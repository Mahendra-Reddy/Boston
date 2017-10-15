import Alt from '../alt';
import Actions from '../Actions/action';
import Source from '../Source/source';

module.exports=Alt.createStore({
  bindListeners:{
     handleGetDefaultData: Actions.getDefaultData
  },
  state:{
   defaultData:[]
  },
  handleGetDefaultData(){
    var data=Source.getDataList();
      this.setState({
        defaultData:data
      })
  }
});