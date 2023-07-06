import * as React from "react";
import { shallow } from "enzyme";
import Cart from "./Cart";

describe("Cart", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Cart onCloseCart={()=>{} } />);
    expect(wrapper).toMatchSnapshot();
  });
});
