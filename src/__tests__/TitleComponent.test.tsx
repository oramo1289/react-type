import React from "react";
import { render, RenderResult,fireEvent, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'

import { TitleComponent } from '../screens/TitleComponent/TitleComponent';

let documentBody: RenderResult;

describe('<TitleComponent/>', () => {

  it('renders the correct text in the document', () => {
    const {getByText} = render(<TitleComponent title={'hola mundo'}/>)
    expect(getByText('hola mundo')).toBeInTheDocument();
  })  
  
})

    // it('runs the first test', () => {
    //   expect(true).toBe(true);
    // });
