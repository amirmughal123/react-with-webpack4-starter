import React from 'react'
import PropTypes from 'prop-types'
import { ConnectedRouter } from 'connected-react-router'
import { renderRoutes } from './routes'

const App = ({ history }) => {
  return (
    <ConnectedRouter history={history}>
      { renderRoutes() }
    </ConnectedRouter>
  )
}

App.propTypes = {
  history: PropTypes.object,
}

export default App