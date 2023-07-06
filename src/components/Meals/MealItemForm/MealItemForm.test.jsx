import * as React from "react";
import { shallow } from "enzyme";
import MealItemForm from "./MealItemForm";

describe("MealItemForm", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<MealItemForm id={""} name={""} />);
    expect(wrapper).toMatchSnapshot();
  });
});
