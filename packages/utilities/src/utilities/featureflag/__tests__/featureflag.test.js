/**
 * Copyright IBM Corp. 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { featureFlag } from '../';

describe('Feature flag utility', () => {
  const objectJSX = {};

  it('return the jsx object provided', () => {
    const output = featureFlag(true, objectJSX);
    expect(output).toBe(objectJSX);
  });

  it('return null', () => {
    const output = featureFlag(false, objectJSX);
    expect(output).toBeNull;
  });
});
