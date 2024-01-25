import React from "react";
import { shallow } from "enzyme";
import CourseList from "./CourseList";
import CourseListRow from "./CourseListRow";

it('Renders without crashing', () => {
    shallow(<CourseList />)
})

it('Renders five differents rows', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.find(CourseListRow).length).toEqual(5)
})