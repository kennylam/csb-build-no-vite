/**
 * Copyright IBM Corp. 2021, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

describe('cdn | canary', () => {
  it('should load without any exceptions', () => {
    cy.visit(`/canary.html`);
    cy.viewport(1280, 780);
  });
});
