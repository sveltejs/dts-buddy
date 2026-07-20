import { Bar } from '../shared/types.js';

export function makeBar(y: string): Bar {
	return new Bar(y);
}
