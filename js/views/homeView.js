import Backbone from 'backbone';
import React from 'react';
import ReactDom from 'react-dom';


export default React.createClass({

 processPhotos(data) {
    return (
      <div className="photoContainer" key={data.objectId}>
        <img className="homePic" src={data.Img}/>
      </div>
    );
  },

  render() { 
    return (
     <div className="homeContainer"> 
       <div className="homePhotos">
        {this.props.photos.map(this.processPhotos)}
       </div>
     </div> 
    )  
  }

});
