import { shallow } from "enzyme";
import App from "./App";

it('render the correct react app', () => {
    shallow(<App />)
})

it('render the class App-header', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App-header').length).toEqual(1)
})

it('render the class App-body', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App-body').length).toEqual(1)
})

it('render the class App-footer', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App-footer').length).toEqual(1)
})