import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import Settings from '../Settings';

describe('<Settings />', () => {
  let defaultProps;
  beforeEach(() => {
    defaultProps = {
      settingsFields: { tickRate: 50 },
      settingsSettingAction: jest.fn()
    };
  });

  describe('Settings SnapShot', () => {
    it('renders Settings correctly', () => {
      const tree = ReactTestRenderer.create(
        <Settings {...defaultProps} />
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('renders Settings correctly with default props', () => {
      delete defaultProps.settingsFields;
      const tree = ReactTestRenderer.create(
        <Settings {...defaultProps} />
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
