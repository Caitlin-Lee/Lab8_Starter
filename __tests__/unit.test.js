// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

// function isPhoneNumber
test('is a valid phone number', () => {
    expect(functions.isPhoneNumber("123-123-123")).toBe(false);
});

test('is a valid phone number', () => {
    expect(functions.isPhoneNumber("123-1")).toBe(false);
});

test('is a valid phone number', () => {
    expect(functions.isPhoneNumber("123-123-1238")).toBe(true);
});

test('is a valid phone number', () => {
    expect(functions.isPhoneNumber("323-123-0123")).toBe(true);
});

// function isEmail
test('is a valid email', () => {
    expect(functions.isEmail("waluigi")).toBe(false);
});

test('is a valid email', () => {
    expect(functions.isEmail("it be like that sometimes")).toBe(false);
});

test('is a valid email', () => {
    expect(functions.isEmail("ihateithere@why.com")).toBe(true);
});

test('is a valid email', () => {
    expect(functions.isEmail("reeeeeeeee@scream.com")).toBe(true);
});

// function isStrongPassword
test('is a strong password', () => {
    expect(functions.isStrongPassword("_waluigi_")).toBe(false);
});

test('is a strong password', () => {
    expect(functions.isStrongPassword("ree")).toBe(false);
});

test('is a strong password', () => {
    expect(functions.isStrongPassword("wAluigi123")).toBe(true);
});

test('is a strong password', () => {
    expect(functions.isStrongPassword("reeeee1234")).toBe(true);
});

// function isDate
test('is a valid date', () => {
    expect(functions.isDate("1/1/150000")).toBe(false);
});

test('is a valid date', () => {
    expect(functions.isDate("1/yes/150")).toBe(false);
});

test('is a valid date', () => {
    expect(functions.isDate("1/1/2000")).toBe(true);
});

test('is a valid date', () => {
    expect(functions.isDate("12/25/2021")).toBe(true);
});

// function isHexColor
test('is a hex color', () => {
    expect(functions.isHexColor("0123I2")).toBe(false);
});

test('is a hex color', () => {
    expect(functions.isHexColor("GGGGG")).toBe(false);
});

test('is a hex color', () => {
    expect(functions.isHexColor("FFFFFF")).toBe(true);
});

test('is a hex color', () => {
    expect(functions.isHexColor("000000")).toBe(true);
});