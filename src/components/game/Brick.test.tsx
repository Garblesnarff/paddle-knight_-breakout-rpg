import React from 'react';
import { render } from '@testing-library/react';
import { Brick } from './Brick';
import { Brick as BrickType, BrickType as BrickEnum } from '../../types/game.types';

test('renders Brick component', () => {
  const brick: BrickType = {
    id: 1,
    x: 100,
    y: 100,
    hp: 1,
    maxHp: 1,
    type: BrickEnum.Grunt,
    width: 50,
    height: 20,
  };

  const { container } = render(<Brick brick={brick} />);
  expect(container.firstChild).toMatchSnapshot();
});
