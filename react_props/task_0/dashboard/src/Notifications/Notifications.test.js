import { shallow } from 'enzyme';
import { Notification } from './Notifications';

it('renders without crashing', () => {
    shallow(<Notification />);
   });

it('renders three list items', () => {
const wrapper = shallow(<Notification />);
expect(wrapper.find('li').length).toEqual(3);
});

it('renders the text "Here is the list of notifications"', () => {
const wrapper = shallow(<Notification />);
expect(wrapper.contains('Here is the list of notifications')).toEqual(true);
});
