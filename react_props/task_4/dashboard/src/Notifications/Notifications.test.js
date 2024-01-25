import { shallow } from 'enzyme';
import { Notification } from './Notifications';
import NotificationItem from './NotificationItem';

it('renders without crashing', () => {
    shallow(<Notification />);
   });

it('The menuItem is displayed if displayDrawer is true', () => {
    const wrapper = shallow(<Notification displayDrawer={true} />);
    expect(wrapper.hasClass('menuItem')).toEqual(true)
});

it('The menuItem is displayed if displayDrawer is false', () => {
    const wrapper = shallow(<Notification displayDrawer={false} />);
    expect(wrapper.hasClass('menuItem')).toEqual(true)
});

it('renders the menu items is not displayed', () => {
    const wrapper = shallow(<Notification displayDrawer={false}/>);
    expect(wrapper.hasClass('Notifications')).toEqual(false);
});

it('renders the menu items is displayed', () => {
    const wrapper = shallow(<Notification displayDrawer={true}/>);
    expect(wrapper.hasClass('Notifications')).toEqual(true);
});

it('renders three list items', () => {
const wrapper = shallow(<Notification />);
expect(wrapper.find(NotificationItem).length).toEqual(3);
});

it('renders the first NotificationItem with the right html', () => {
    const wrapper = shallow(<Notification />);
    expect(wrapper.find(NotificationItem).first().prop('html')).toEqual({ __html: '<u>test</u>' });
});

it('renders the text "Here is the list of notifications"', () => {
const wrapper = shallow(<Notification />);
expect(wrapper.contains('Here is the list of notifications')).toEqual(true);
});
