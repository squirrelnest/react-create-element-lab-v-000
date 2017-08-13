import { expect } from 'chai';
import sinon from 'sinon';
import { shallow, mount } from 'enzyme';
import React from 'react';
import meInReact from '../src/index';

describe('You in React', () => {
  describe('Parent element', () => {
    it('should have the right class', () => {
      expect(meInReact.props.className).to.equal('me');
    });

    it('should have three children', () => {
      expect(meInReact.props.children.length).to.equal(3);
    });
  });

  describe('Title', () => {
    let element;

    before(() => {
      element = meInReact.props.children[0];
    });

    it('should have the right tag', () => {
      expect(element.type).to.equal('h1');
    });

    it('should contain the right text', () => {
      expect(element.props.children).to.equal('Mikka');
    });
  });

  describe('Tagline', () => {
    let element;

    before(() => {
      element = meInReact.props.children[1];
    });

    it('should have the right tag', () => {
      expect(element.type).to.equal('p');
    });

    it('should contain the right text', () => {
      expect(element.props.children).to.equal('Serial career-changer');
    });
  });

  describe('Interests', () => {
    let element;

    before(() => {
      element = meInReact.props.children[2];
    });

    it('should have the right tag', () => {
      expect(element.type).to.equal('ul');
    });

    it('should have the right class', () => {
      expect(element.props.className).to.equal('my-interests');
    });

    it('should have four children', () => {
      expect(element.props.children.length).to.equal(4);
    });

    it('should have the right interests', () => {
      expect(element.props.children[0].props.children).to.equal('Coding');
      expect(element.props.children[1].props.children).to.equal('Animation');
      expect(element.props.children[2].props.children).to.equal('Acrobatics');
      expect(element.props.children[3].props.children).to.equal('Sailing');
    });
  });
});
