import React from 'react'
// import { connect } from 'react-redux'
// import * as actionCreators from '../redux/actions/authActions'
// import { bindActionCreators } from 'redux'
import HomePage from '../../components/homePage/HomePage';

class HomePageContainer extends React.Component {
  handleAdd = () => { this.context.router.push('/add'); }

  handleTest = () => { this.context.router.push('/test'); }

  render () {
    return (
      <HomePage
        onAdd={this.handleAdd}
        onTest={this.handleTest}
      />
    )
  }
}

HomePageContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default HomePageContainer;
