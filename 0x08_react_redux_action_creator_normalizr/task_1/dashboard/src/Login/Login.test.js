import Login from "./Login";
import { shallow } from "enzyme";

if('render without crashing', () => {
    shallow(<Login />);
});

it('render two inputs and 2 labels', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('input').length).toEqual(2);
    expect(wrapper.find('label').length).toEqual(2);
});

describe('Login component', () => {
    it('submit button is disabled by default', () => {
       const { getByLabelText } = render(<Login />);
       const emailInput = getByLabelText('Email');
       const passwordInput = getByLabelText('Password');
       const submitButton = getByLabelText('OK');
   
       expect(submitButton).toBeDisabled();
    });
   
    it('submit button is enabled after entering values in email and password inputs', () => {
       const { getByLabelText } = render(<Login />);
       const emailInput = getByLabelText('Email');
       const passwordInput = getByLabelText('Password');
       const submitButton = getByLabelText('OK');
   
       fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
       fireEvent.change(passwordInput, { target: { value: 'password123' } });
   
       expect(submitButton).not.toBeDisabled();
    });
   });