import React from 'react';
import { act, create } from 'react-test-renderer';

import SignUp from '../Components/SignUp';

let handleSubmit = undefined;
beforeEach(() => {
    handleSubmit = jest.fn();
});

describe('onChange event tests', () => {
    test('updates titles when changed', async () => {
        const testTitle = "testtitle";
        const testInstance = create(<SignUp />).root;
        const title = testInstance.findByProps({ name: 'title' });
        expect(title.props.value).toEqual('');
        await act(async () => {
            title.props.onChange({ target: { value: testTitle } });
        });
        expect(title.props.value).toEqual(testTitle);
    });
    test('updates first name when changed', async () => {
        const testName = "testname";
        const testInstance = create(<SignUp />).root;
        const firstName = testInstance.findByProps({ name: 'firstName' });
        expect(firstName.props.value).toEqual('');
        await act(async () => {
            firstName.props.onChange({ target: { value: testName } });
        });
        expect(firstName.props.value).toEqual(testName);
    });
    test('updates last name when changed', async () => {
        const testName = "testname";
        const testInstance = create(<SignUp />).root;
        const lastName = testInstance.findByProps({ name: 'lastName' });
        expect(lastName.props.value).toEqual('');
        await act(async () => {
            lastName.props.onChange({ target: { value: testName } });
        });
        expect(lastName.props.value).toEqual(testName);
    });
    test('updates email when changed', async () => {
        const testEmail = "testemail";
        const testInstance = create(<SignUp />).root;
        const email = testInstance.findByProps({ name: 'email' });
        expect(email.props.value).toEqual('');
        await act(async () => {
            email.props.onChange({ target: { value: testEmail } });
        });
        expect(email.props.value).toEqual(testEmail);
    });
    test('updates dob when changed', async () => {
        const testDOB = new Date();
        const testInstance = create(<SignUp />).root;
        const dob = testInstance.findByProps({ name: 'dob' });
        expect(dob.props.value).toEqual('');
        await act(async () => {
            dob.props.onChange({ target: { value: testDOB } });
        });
        expect(dob.props.value).toEqual(testDOB);
    })
    test('updates phone when changed', async () => {
        const testPhone = "123";
        const testInstance = create(<SignUp />).root;
        const phone = testInstance.findByProps({ name: 'phone' });
        expect(phone.props.value).toEqual('');
        await act(async () => {
            phone.props.onChange({ target: { value: testPhone } });
        });
        expect(phone.props.value).toEqual(testPhone);
    });
    test('updates gender when changed', async () => {
        const testGender = "testgender";
        const testInstance = create(<SignUp />).root;
        const gender = testInstance.findAllByProps({ name: 'gender' })[0];
        expect(gender.props.checked).toEqual(false);
        await act(async () => {
            gender.props.onChange({ target: { value: gender.props.value } });
        });
        expect(gender.props.checked).toEqual(true);
    })
});

describe('form submit', () => {
    test('resets options', async () => {
        const testGender = "testgender";
        const testPhone = "123";
        const testDOB = new Date();
        const testEmail = "testemail";
        const testName = "testname";
        const testTitle = "testtitle";
        const testInstance = create(<SignUp />).root;
        const gender = testInstance.findAllByProps({ name: 'gender' })[0];
        await act(async () => {
            gender.props.onChange({ target: { value: gender.props.value } });
        });
        const phone = testInstance.findByProps({ name: 'phone' });
        await act(async () => {
            phone.props.onChange({ target: { value: testPhone } });
        });
        const dob = testInstance.findByProps({ name: 'dob' });
        await act(async () => {
            dob.props.onChange({ target: { value: testDOB } });
        });
        const lastName = testInstance.findByProps({ name: 'lastName' });
        await act(async () => {
            lastName.props.onChange({ target: { value: testName } });
        });
        const firstName = testInstance.findByProps({ name: 'firstName' });
        await act(async () => {
            firstName.props.onChange({ target: { value: testName } });
        });
        const title = testInstance.findByProps({ name: 'title' });
        await act(async () => {
            title.props.onChange({ target: { value: testTitle } });
        });
        const form = testInstance.findByProps({ id: 'form' });
        await act(async () => {
            form.props.onSubmit(new Event('form'));
        });
        expect(title.props.value).toEqual('');
        expect(firstName.props.value).toEqual('');
        expect(lastName.props.value).toEqual('');
        expect(dob.props.value).toEqual('');
        expect(phone.props.value).toEqual('');
        expect(gender.props.checked).toEqual(false);
    });
})