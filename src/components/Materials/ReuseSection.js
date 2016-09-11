import React, { Component } from 'react'
import { connect } from 'react-redux'
import FontAwesome from 'react-fontawesome'

class ReuseSection extends Component {
  constructor(){
    super();
    this.state = {
      material: ''
    }
  }
  componentWillMount(){
    var material = localStorage.getItem('chosenMaterial');
    this.setState({
      material
    })
  }
  render() {
    return (
      <div className='sections'>
        <h1>Ideas for Reusing {this.state.material.replace(this.state.material[0], this.state.material[0].toUpperCase())}</h1>
        <div className='social-media-hashtag'>#amEco</div>
        <div className='social-media-hashtag'>#{this.state.material}</div>
        <ul className='social-feed-list'>
          <li className='social-feed-item'>
            <div className='dummy-image'></div>
            <div className='social-text-area'>
              <h3>Amy Knight</h3>
              <p>
                Look at how I reused this <strong>#{this.state.material}</strong>. 
                Why throw stuff away, when it can be this beatiful? <strong>#emEco</strong>
              </p>
            </div>
          </li>
          <li className='social-feed-item'>
            <div className='dummy-image'></div>
            <div className='social-text-area'>
              <h3>Gwen Faraday</h3>
              <p>
                Look at how I reused this <strong>#{this.state.material}</strong>. 
                Why throw stuff away, when it can be this beatiful? <strong>#emEco</strong>
              </p>
            </div>
          </li>
          <li className='social-feed-item'>
            <div className='dummy-image'></div>
            <div className='social-text-area'>
              <h3>Jared Wilcurt</h3>
              <p>
                Look at how I reused this <strong>#{this.state.material}</strong>. 
                Why throw stuff away, when it can be this beatiful? <strong>#emEco</strong>
              </p>
            </div>
          </li>
          <li className='social-feed-item'>
            <div className='dummy-image'></div>
            <div className='social-text-area'>
              <h3>Kim Sharpe</h3>
              <p>
                Look at how I reused this <strong>#{this.state.material}</strong>. 
                Why throw stuff away, when it can be this beatiful? <strong>#emEco</strong>
              </p>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

var mapStateToProps = function(state, ownProps){
    return {
    	materials: state.materialsReducer.materials
    };
};
ReuseSection = connect(state => (mapStateToProps), null)(ReuseSection);
export default ReuseSection