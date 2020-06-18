import React from 'react'
import api from '../../services/api'
import { login } from '../../services/auth'
import './index.css'

export default class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  async handleSubmit(e) {
    e.preventDefault()
    
    try {
      const response = await api.post('user/login', { email: this.state.email, password: this.state.password })
      login(response.data.token)
      this.props.history.push('/home')
    } catch (err) {
      document.getElementById('response').classList.add('error')
      document.getElementById('response').innerHTML = 'E-mail ou senha inválido'

    }
  }

  render() {
    return (
        <div id="login">
          <h2 className="qualquiefergf">Sapotti</h2>
        </div>
    )
  }
}