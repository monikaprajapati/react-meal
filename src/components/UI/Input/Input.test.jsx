import * as React from "react";
import { shallow } from "enzyme";
import Input from "./Input";

describe("Input", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Input />);
    expect(wrapper).toMatchSnapshot();
  });
});
