// App
import React from 'react'
import { ParallaxProvider } from 'react-scroll-parallax'
import Home from '@/pages/Home'
import 'App.scss'
class App extends React.Component {
  render() {
    return (
      <ParallaxProvider>
        <Home />
      </ParallaxProvider>
    )
  }
}

export default App
