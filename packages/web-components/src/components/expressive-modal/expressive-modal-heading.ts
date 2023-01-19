/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { customElement } from 'lit-element';
import BXModalHeading from '@carbon/web-components/es/components/modal/modal-heading.js';
import ddsSettings from '../../internal/vendor/@carbon/ibmdotcom-utilities/utilities/settings/settings';
import styles from './expressive-modal.scss';
import StableSelectorMixin from '../../globals/mixins/stable-selector';

const { stablePrefix: ddsPrefix } = ddsSettings;

/**
 * Expressive modal heading.
 *
 * @element dds-expressive-modal-heading
 */
@customElement(`${ddsPrefix}-expressive-modal-heading`)
class DDSExpressiveModalHeading extends StableSelectorMixin(BXModalHeading) {
  connectedCallback() {
    if (!this.hasAttribute('role')) {
      this.setAttribute('role', 'heading');
    }
    if (!this.hasAttribute('aria-level')) {
      this.setAttribute('aria-level', '2');
    }
    super.connectedCallback();
  }

  static get stableSelector() {
    return `${ddsPrefix}--expressive-modal-heading`;
  }

  static styles = styles; // `styles` here is a `CSSResult` generated by custom WebPack loader
}

/* @__GENERATE_REACT_CUSTOM_ELEMENT_TYPE__ */
export default DDSExpressiveModalHeading;