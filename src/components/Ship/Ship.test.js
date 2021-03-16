import React from 'react';
import {render, unmountComponentAtNode } from 'react-dom';
import Ship from './Ship';
import { act } from "react-dom/test-utils";
import renderer from 'react-test-renderer';

let div;

beforeEach(() => {
  div = document.createElement('div');
  document.body.appendChild(div);
})

afterEach(() => {
  unmountComponentAtNode(div);
  div.remove();
  div = null;
})

it("renders without crash", () => {
  render(<Ship></Ship>, div);
})

it("render ship", () => {

})
//
// it("match snapshot", () => {
//   const tree = renderer.create(<Ship type={'boat'} />).toJSON();
//   expect(tree).toMatchSnapshot();
// })
