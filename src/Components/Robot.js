import BaseRobot from './BaseRobot';
import { placer, reporter, mover, lefter, righter } from '../basicBehaviors';

export default class Robot extends BaseRobot {}

Robot.prototype.assemble(
  placer,
  reporter,
  mover,
  lefter,
  righter,
);
