import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Shape from "./shape";
import "../../../config";

describe("Slider component", () => {
  it("to match snapshot", () => {
    const wrapper = shallow(<Shape bottom={0} left={0} right={0} top={0} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
