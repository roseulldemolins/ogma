import React from 'react';
import ReactDOM from 'react-dom';
import AddAQuestion from '../AddAQuestion.js';
import { render, fireEvent, cleanup } from "react-testing-library";

afterEach(cleanup);

describe("AddAQuestion", () => {
it('should display add on the button', () => {
const { getByText, getByLabelText } = render(<AddAQuestion />)
expect(getByText(/Add/i)).toBeTruthy();
expect(getByLabelText("add-button")).toBeTruthy();
});
})
