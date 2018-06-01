import React from 'react';
import Enzyme,{ shallow, mount, render } from 'enzyme';
import ClickCounter from '../ClickCounter'
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

describe('ClickCounter Component Text Templates', () => {
 
 // make our assertion and what we expect to happen 
 it('button text', () => {
  const wrap = shallow(<ClickCounter />);
  expect(wrap.find('button').text()).toEqual(' click ')
 })

 it('counter text', () => {
  const wrap = shallow(<ClickCounter />);
  expect(wrap.find('.txt').text()).toEqual(' count = 0 ')
 })

 
})

describe('Clicking should increment value', () => {

  it('should respond to button click and increment click counter', () => {
   
   const wrapper = shallow(<ClickCounter />);
   const beforeCounter = wrapper.state('counter');
   wrapper.find('button').simulate('click');
   const afterCounter = wrapper.state('counter');
   expect(afterCounter).toEqual(beforeCounter+1);
   
  })

})

describe('Snapshot Test', () => {

 it('ClickCounter', () => {
   const wrap = mount(<ClickCounter />)
   expect(wrap).toMatchSnapshot()
 })
 
})