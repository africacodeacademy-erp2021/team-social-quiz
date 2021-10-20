import { mount, shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { configure } from "enzyme";

import "@testing-library/jest-dom";
import React from "react";
import Facebook from "./authentication-and-login/facebook_authentication/facebook";
import Github from "./authentication-and-login/github_authentication/github";
import Google from "./authentication-and-login/google_authentication/google";
import Login from "./authentication-and-login/login/login";
import Registration from "./authentication-and-login/registration/registration";
import { render, screen } from "@testing-library/react";



configure({ adapter: new Adapter() });

describe("Facebook Button", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<Facebook />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe("Github Button", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<Github />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe("Google Button", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<Google />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe("Login Page", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe("Registration Page", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<Registration />);
    expect(wrapper).toMatchSnapshot();
  });
});


  it('check if Authentication popup opens after clicking on Google button', () => {  
    const login = mount(<Google />),
        buttonclick = login.find("button");
       
    buttonclick.first().simulate('click');
    expect(login.find('button')).toHaveLength(1);
});

test('Authentication button exists', async () => {
    render(<Facebook />);
 
    const button = screen.getByRole('button', { name: 'Login with Facebook' });
    expect(button).toBeInTheDocument();

})

test('Props values are passed correctly', async () => {
    render(<Facebook buttonName="SignIn with Facebook"/>);
 
    const vanillaInput = screen.getByRole('button', { name: 'SignIn with Facebook' });
    expect(vanillaInput).toBeInTheDocument();
})






  
