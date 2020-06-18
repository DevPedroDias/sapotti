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
      <div id="login" style={{
        margin: 0,
        padding: 0,
        width: "100vw",
        height: "100vh",
        maxWidth: "100vw",
        maxHeight: "100vh",
        backgroundColor: "#FF00FF",
        overflow: "auto"
      }}>
        <h1 style={{
          color: "#fff",
          fontSize: "7em"
        }}>Sapotti</h1>
        <div style={{
          width: "100%",
          height: "40%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",

        }}>
          <div style={{
            width: "20%",
            height: "100%",
            backgroundColor: "rgba(255,255,255,0.6)",
            borderRadius: "3px"
          }}>
            <form style={{
              marginTop:"15%",
              width:"100%",
              height:"100%"
            }}>
              <input type="text" placeholder="E-mail" style={{
                width:"80%",
                height:"6%"
              }} />
            </form>
          </div>
        </div>
      </div>
    )
  }
}