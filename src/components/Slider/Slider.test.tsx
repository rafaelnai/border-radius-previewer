import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Slider from "components/Slider";
import "../../../config";

describe("Slider component", () => {
  it("to match snapshot", () => {
    const wrapper = shallow(
      <Slider
        handleChange={(values: number[]) => {}}
        max={999}
        min={0}
        values={[0]}
      />
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("to match snapshot", () => {
    const wrapper = shallow(
      <Slider
        handleChange={(values: number[]) => {}}
        max={999}
        min={0}
        values={[0]}
        vertical
      />
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
