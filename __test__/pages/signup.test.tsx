import {render, screen} from '../setupTest';
import SignUp from "../../pages/signup";
import { INITIAL_STATE } from '../../redux/reducer'

describe("SignUp", () => {

  it("should show text Already have NEAR account?", () => {
    const textToFind = "Already have NEAR account?";
    render(
        <SignUp />,
        {
          preloadedState: INITIAL_STATE
        }      
    );
    const nearAccountText = screen.getByText(textToFind);    
    expect(nearAccountText).toBeInTheDocument();
  });

  it("should show a Button with Login with Near text", () => {
    const textToFind = "Log in with NEAR";
    render(
      <SignUp />, 
      {
        preloadedState: INITIAL_STATE
      }
    );

    const loginWithNearText = screen.getByText(textToFind);
    expect(loginWithNearText).toBeInTheDocument();    
  });

});
