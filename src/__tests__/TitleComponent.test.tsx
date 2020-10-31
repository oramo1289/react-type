import React from "react";
import ReactDOM from "react-dom";
import { render, RenderResult,fireEvent, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'

import { TitleComponent } from '../screens/TitleComponent/TitleComponent';

let documentBody: RenderResult;

//basic test structure
// const expected = true;
// const actual = false;
// describe('it works', () => {
//   expect(actual).toBe(expected);
// })

// test("render component", () => {
//   const root = document.createElement('div');
//   ReactDOM.render(<TitleComponent title={'hola mundo'}/>, root)
// });

//Render a React components to the dom

it('renders the correct text in the document', () => {
  const {getByText} = render(<TitleComponent title={'hola mundo'}/>)
  expect(getByText('hola mundo')).toBeInTheDocument();
})  
    // it('runs the first test', () => {
    //   expect(true).toBe(true);
    // });
