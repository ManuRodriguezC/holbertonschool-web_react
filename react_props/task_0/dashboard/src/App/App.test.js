import { render } from '@testing-library/react';
import App from './App';
import Notifications from './Notifications';
import Header from './Header';
import Login from './Login';
import Footer from './Footer';

it('should contain the Notifications component', () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId('notifications')).toBeInTheDocument();
});

it('should contain the Header component', () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId('header')).toBeInTheDocument();
});

it('should contain the Login component', () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId('login')).toBeInTheDocument();
});

it('should contain the Footer component', () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId('footer')).toBeInTheDocument();
});
