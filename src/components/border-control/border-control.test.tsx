import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import BorderEditor from "./border-control";
import "../../../config";

describe("Slider component", () => {
  it("to match snapshot", () => {
    const wrapper = shallow(
      <BorderEditor>
        <h1>Hello World</h1>
      </BorderEditor>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
