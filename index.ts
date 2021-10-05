import { UPlugin } from '@classes';
import { getByProps } from '@webpack';

export default class DevMode extends UPlugin {
  start(): void {
    Object.defineProperty(getByProps('isDeveloper'), 'isDeveloper', {
      configurable: true,
      writable: true,
      value: 1
    });
  }
  stop(): void {
    Object.defineProperty(getByProps('isDeveloper'), 'isDeveloper', {
      configurable: true,
      writable: true,
      value: 0
    });
  }
}
