import React from 'react'

const meetContext = React.createContext({
  isRegister: false,
  isRegisterTriggered: () => {},
})

export default meetContext
