import * as React from "react";
import { shallow } from "enzyme";
import MealItem from "./MealItem";

describe("MealItem", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<MealItem meal={{
      id: "",
      name: "",
      description: "",
      price: 0
    }} />);
    expect(wrapper).toMatchSnapshot();
  });
});
