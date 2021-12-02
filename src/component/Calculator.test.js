import { render, fireEvent, screen } from '@testing-library/react';
// import { BrowserRouter as Router } from "react-router-dom";
import Calculator from './Calculator';
import calculate, { isNumber } from '../logic/calculate';

describe('Calculator Component', () => {
  it('Calculator snapshot test', () => {
    const { asFragment: calculator } = render(<Calculator />);
    expect(calculator()).toMatchSnapshot;
  });
});

describe("calculate", () => {
  it("IsNumber() should return false when input is not number", () => {
    expect(isNumber(".")).not.toBeTruthy();
  });

  it("IsNumber() should return true if the input is a number", () => {
    expect(isNumber("10")).toBeTruthy();
  });

  it("calculate({operation, next}, buttonName=AC) should return { total: null, next: null, operation: null }", () => {
    const buttonName = "AC";
    const obj = { total: 0, next: 0, operation: null };

    const result = calculate(obj, buttonName);

    expect(result).toEqual({ total:0, next: null, operation: null });
  });

  it("calculate({operation, next:0}, buttonName=0) should return {}", () => {
    const buttonName = "0";
    const obj = { total: null, next: "0", operation: null };

    const result = calculate(obj, buttonName);

    expect(result).toStrictEqual({});
  });

  it("calculate({operation, !next}, buttonName) should override obj.next: buttonName", () => {
    const buttonName = "1";
    const obj = { total: null, next: null, operation: "+" };

    const result = calculate(obj, buttonName);

    expect(result).toStrictEqual({ ...obj, next: buttonName });
  });

  it("calculate({operation, !next}, buttonName) should return obj.next + buttonName", () => {
    const buttonName = "4";
    const obj = { total: null, next: 10, operation: null };

    const result = calculate(obj, buttonName);

    expect(result).toStrictEqual({ total: null, next: 10 + buttonName });
  });
});


 describe("Calculator interaction tests", () => {
   let display;
   beforeEach(() => {
     const { container } = render(<Calculator />);
     display = container.querySelector(".display");
   });

   it("test interaction: 10 + 10 = 20, then press AC", () => {
     ["1", "0"].forEach((input) => {
       fireEvent.click(screen.getByText(input));
     });

     expect(display.innerHTML).toEqual("10");

     ["+", "1", "0", "="].forEach((input) => {
       fireEvent.click(screen.getByText(input));
     });

     expect(display.innerHTML).toEqual("20");

     fireEvent.click(screen.getByText("AC"));

     expect(display.innerHTML).toEqual("0");
   });

   it("test unacceptable interaction: + % =, should do nothing", () => {
     ["+", "%", "="].forEach((input) => {
       fireEvent.click(screen.getByText(input));
     });

     expect(display.innerHTML).toEqual("%");
   });

   it("test math error interaction: 1 % 0 prints `Can't divide by zero", () => {
     ["1", "%", "0", "="].forEach((input) => {
       fireEvent.click(screen.getByText(input));
     });

     expect(display.innerHTML).toEqual("Can't % 0.");
   });

   it("calculate({!operation, !next}, buttonName) should return next: buttonName", () => {
     const buttonName = "5";
     const obj = { total: null, next: null, operation: null };

     const result = calculate(obj, buttonName);

     expect(result).toStrictEqual({ next: buttonName, total: null });
   });

   
 });

 
