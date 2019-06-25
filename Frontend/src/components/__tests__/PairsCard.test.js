import React from 'react';
import ReactDOM from 'react-dom';
import PairsCard from '../PairsCard.js';
import { render, fireEvent, cleanup } from "react-testing-library";

afterEach(cleanup);

describe("PairsCard", () => {

it('should display the back of the card', () => {
const { getByLabelText } = render(<PairsCard/>)
expect(getByLabelText("card-back")).toBeTruthy();
});

it('should display the front of the card', () => {
const { getByLabelText } = render(<PairsCard/>)
expect(getByLabelText("card-front")).toBeTruthy();
});


})
