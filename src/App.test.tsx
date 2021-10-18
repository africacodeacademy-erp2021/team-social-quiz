
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';

import React from "react";
import Facebook from "./authentication-and-login/facebook_authentication/facebook";
import Github from './authentication-and-login/github_authentication/github';
import Google from './authentication-and-login/google_authentication/google';
import Login from './authentication-and-login/login/login';
import Registration from './authentication-and-login/registration/registration';

configure({ adapter: new Adapter() });


describe('Facebook Button', () => {
    it('renders correctly', () => {
      const wrapper = shallow(<Facebook />);
      expect(wrapper).toMatchSnapshot();
     
    });
  });

  describe('Github Button', () => {
    it('renders correctly', () => {
      const wrapper = shallow(<Github />);
      expect(wrapper).toMatchSnapshot();
     
    });
  });

  describe('Google Button', () => {
    it('renders correctly', () => {
      const wrapper = shallow(<Google />);
      expect(wrapper).toMatchSnapshot();
     
    });
  });

  describe('Login Page', () => {
    it('renders correctly', () => {
      const wrapper = shallow(<Login />);
      expect(wrapper).toMatchSnapshot();
     
    });
  });

  describe('Registration Page', () => {
    it('renders correctly', () => {
      const wrapper = shallow(<Registration />);
      expect(wrapper).toMatchSnapshot();
     
    });
  });
