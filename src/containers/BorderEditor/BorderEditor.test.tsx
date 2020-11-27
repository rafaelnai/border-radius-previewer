import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import BorderEditor from "containers/BorderEditor";
import "../../../config";

describe("Slider component", () => {
  it("to match snapshot", () => {
    const wrapper = shallow(<BorderEditor />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("to match snapshot", () => {
    const wrapper = shallow(<BorderEditor />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
