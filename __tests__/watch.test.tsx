/*
   Sample tests to do a unit test Hello World component.
*/
import "mocha";
import { expect } from "chai";
import * as React from "react";
import * as enzyme from "enzyme";
import { Watch } from "../src/watch";
import * as Adapter from 'enzyme-adapter-react-16';
enzyme.configure({ adapter: new Adapter() });

describe("HelloWorld Test", () => {
    const component = enzyme.shallow(<Watch />);

    it("should have a watch container", () => {
        expect(component.find("#clock").length).equal(1);
    });
    it("should have place holder for date", () => {
        expect(component.find(".date").length).equal(1);
    });
    it("should have a place holder for time", () => {
        expect(component.find(".time").length).equal(1);
    });


});