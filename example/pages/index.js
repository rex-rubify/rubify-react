export default () => (
  <div id="main_app" style={styleSheet.mainApp}>
    <h1 style={styleSheet.welcome}>Welcome to Rubify!</h1>
  </div>
)

let styleSheet = {
  mainApp: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  welcome: {
    color: '#333333'
  }
}
