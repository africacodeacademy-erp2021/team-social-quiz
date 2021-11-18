import {  shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { configure } from "enzyme";

import "@testing-library/jest-dom";
import React from "react";

import Login from "./authentication-and-login/login/login";





configure({ adapter: new Adapter() });



describe("Login Page", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper).toMatchSnapshot();
  });
});

 



  
