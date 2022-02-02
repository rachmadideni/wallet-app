import { Global, css } from '@emotion/react'
import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro'

const customStyles = css({
  html:{    
    ...tw`m-6`
  },
  body: {
    WebkitTapHighlightColor: theme`colors.white`,    
    justifyContent:'center',    
    minHeight: '100vh',
    ...tw`overflow-y-scroll`,
    ...tw`antialiased`,
  },
})

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <Global styles={customStyles} />
  </>
)

export default GlobalStyles