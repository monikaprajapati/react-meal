import * as React from "react";
import { shallow } from "enzyme";
import Header from "./Header";

describe("Header", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Header onShowCart={()=>{}} />);
    expect(wrapper).toMatchSnapshot();
  });
});
