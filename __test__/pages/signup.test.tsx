
import {render, screen} from '../setupTest';
import {Provider} from 'react-redux' 
import SignUp from "../../pages/signup";
import configureStore from 'redux-mock-store'
import { INITIAL_STATE } from '../../redux/reducer'

const mockStore = configureStore();  
let store = mockStore(INITIAL_STATE);  

describe("SignUp", () => {

  it("should show text Already have NEAR account?", () => {
    const textToFind = "Already have NEAR account?";
    render(
      <Provider store={store}>
        <SignUp />
      </Provider>
    );
    const nearAccountText = screen.getByText(textToFind);    
    expect(nearAccountText).toBeInTheDocument();
  });

  it("should show a Button with Login with Near text", () => {
    const textToFind = "Log in with NEAR";
    render(
      <Provider store={store}>
        <SignUp/>
      </Provider>
      )
    const loginWithNearText = screen.getByText(textToFind);
    expect(loginWithNearText).toBeInTheDocument();    
  });

});
