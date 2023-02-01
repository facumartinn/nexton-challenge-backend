import { parseAndCalculate, calcValueInsideTerm } from './calculations';

test('perform operation: 1+2', () => {
    expect(parseAndCalculate("1 + 2")).toBe(3);
});

test('perform operation: 10 / 2 + (10 * 3) - 4', () => {
    expect(parseAndCalculate("10 / 2 + (10 * 3) - 4")).toBe(31);
});

test('perform operation: 10 * 7 * 10', () => {
expect(parseAndCalculate("10 * 7 * 10")).toBe(700);
});

test('perform operation inside parentheses and return final operation: 10 * (2 + 5) * 10 => 10 * 7 * 10', () => {
    expect(calcValueInsideTerm("10 * (2 + 5) * 10")).toBe("10 * 7 * 10");
});

test('perform operation inside parentheses and return final operation: (5 + 5) * (2 + 5) * 10 => 10 * 7 * 10', () => {
    expect(calcValueInsideTerm("10 * (2 + 5) * 10")).toBe("10 * 7 * 10");
});