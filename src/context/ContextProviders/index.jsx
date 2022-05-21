// ContextProviders
import { ParallaxProvider } from 'react-scroll-parallax'

const ContextProviders = ({ children }) => {
  return <ParallaxProvider>{children}</ParallaxProvider>
}

export default ContextProviders
