import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
class App extends React.Component {
  state = {
    clicou: "ainda não clicou",
  }
  componentDidMount() {
    console.log('[App] - Apareceu na Tela')
  }
  handleClick() {
    this.setState({
      clicou: "clicou"
    })
  }
  render() {
    console.log("[App] - Renderizou")
    return (
      <div>
        Olá, {this.props.name}, você {this.state.clicou}.
        <button onClick={this.handleClick.bind(this)}>Clique aqui</button>
      </div>
    )
  }
}
ReactDOM.render(
  <React.StrictMode>
    <App name={"Diogenes de Oliveira"} />
  </React.StrictMode>,
  document.getElementById('root')
);
