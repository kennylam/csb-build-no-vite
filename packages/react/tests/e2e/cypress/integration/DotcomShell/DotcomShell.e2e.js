/**
 * Copyright IBM Corp. 2021, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

describe('DotcomShell', () => {
  it('should load the default DotcomShell example', () => {
    cy.visit('/DotcomShell');

    // Take a snapshot for visual diffing
    cy.percySnapshot('DotcomShell | default');
  });
});
