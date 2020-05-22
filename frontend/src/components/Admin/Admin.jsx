import React, {Component} from 'react'
import Main from '../template/Main'
import Axios from 'axios'
import ManIcone from '../../assets/imgs/man-icon.png'


const headerProps = {
  icon: 'user-secret',
  title: 'Administrator',
  subtitle: 'Developer'
};

const baseUrl = 'http://localhost:3001/admins'


export default class UserCrud extends Component{

  state = {
    list : []
  }

  logon(){
    console.log('logou')
  }


  getUpdatedList(user, add=true){
    const list = this.state.list.filter(u => u.id !== user.id)
    if(add) list.unshift(user)
    return list
  }

  componentWillMount(){
    Axios(baseUrl).then(resp => {
      this.setState({list: resp.data})
    })
  }

  renderForm(){
    return this.state.list.map(e => {
      return(
        <div>
          <h1>{e.name}</h1>
          <p>{e.email}</p>
        </div>
      )
    })
  }

  render() {
    return(
      <Main {...headerProps}>
          {this.renderForm()}
      </Main>
    )
  }
}
