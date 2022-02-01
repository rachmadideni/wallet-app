import '@testing-library/jest-dom'
import { ReactElement, ReactNode } from 'react' 
import { 
  render as rtlRender,
  RenderOptions,
  RenderResult
} from '@testing-library/react'
import { Store} from 'redux'
import { Provider } from 'react-redux';
import { RootState } from '../store'
import configureStore from 'redux-mock-store'
import { INITIAL_STATE } from '../redux/reducer'
const mockStore = configureStore();  

type ReduxRenderOptions = {
  preloadedState?:RootState;
  store?: Store;
  renderOptions?:Omit<RenderOptions, "wrapper"> 
}

function render(ui: ReactElement,
  {
    preloadedState,
    store = mockStore(INITIAL_STATE),
    ...renderOptions
  }: ReduxRenderOptions = {}
): RenderResult {

  function Wrapper({ children }:{ children?: ReactNode }): ReactElement {
    return <Provider store={store}>{children}</Provider>
  }

  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

// re-export everything
export * from '@testing-library/react'

// override render method
export { render }