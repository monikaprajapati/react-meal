import * as React from "react";
import { shallow } from "enzyme";
import HeaderCart from "./HeaderCart";

describe("HeaderCart", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<HeaderCart onClick={()=>{} } />);
    expect(wrapper).toMatchSnapshot();
  });
});
