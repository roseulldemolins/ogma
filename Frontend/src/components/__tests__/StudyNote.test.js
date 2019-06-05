import React from 'react';
import ReactDOM from 'react-dom';
import StudyNote from '../StudyNote.js';
import { render, fireEvent, cleanup } from "react-testing-library";

afterEach(cleanup);

describe("StudyNote", () => {

it('should have a delete button', () => {
const { getByText, getByLabelText } = render(<StudyNote/>)
expect(getByText(/Remove Note/i)).toBeTruthy();
expect(getByLabelText("delete")).toBeTruthy();

});


})
