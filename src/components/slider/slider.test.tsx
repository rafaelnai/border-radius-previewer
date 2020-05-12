import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Slider from "./slider";
import "../../../config";

describe("Slider component", () => {
  it("to match snapshot", () => {
    const wrapper = shallow(<Slider />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("to match snapshot", () => {
    const wrapper = shallow(<Slider vertical />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
