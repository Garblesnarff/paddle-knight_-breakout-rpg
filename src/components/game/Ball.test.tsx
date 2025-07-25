import React from 'react';
import { render } from '@testing-library/react';
import { Ball } from './Ball';
import { Ball as BallType, Cosmetics, RunicEmpowermentBuffs } from '../../types/game.types';

test('renders Ball component', () => {
  const ball: BallType = {
    id: 1,
    x: 100,
    y: 100,
    vx: 5,
    vy: 5,
    size: 10,
    damage: 1,
  };
  const cosmetics: Cosmetics = { ballEffect: 'none' };
  const activeBuffs: RunicEmpowermentBuffs = { haste: false, power: false, shield: false };

  const { container } = render(<Ball ball={ball} cosmetics={cosmetics} activeBuffs={activeBuffs} />);
  expect(container.firstChild).toMatchSnapshot();
});
