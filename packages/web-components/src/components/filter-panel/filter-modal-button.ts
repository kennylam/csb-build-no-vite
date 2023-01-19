/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { customElement } from 'lit-element';
import BXModalFooterButton from '@carbon/web-components/es/components/modal/modal-footer-button.js';
import ddsSettings from '../../internal/vendor/@carbon/ibmdotcom-utilities/utilities/settings/settings';
import StableSelectorMixin from '../../globals/mixins/stable-selector';
import styles from './filter-panel.scss';

const { stablePrefix: ddsPrefix } = ddsSettings;

/**
 * Extends the BXModalFooterButton.
 *
 * @element dds-filter-modal-footer-button
 */
@customElement(`${ddsPrefix}-filter-modal-footer-button`)
class DDSFilterModalButton extends StableSelectorMixin(BXModalFooterButton) {
  static get stableSelector() {
    return `${ddsPrefix}-filter-modal-footer-button`;
  }

  static styles = styles; // `styles` here is a `CSSResult` generated by custom WebPack loader
}

/* @__GENERATE_REACT_CUSTOM_ELEMENT_TYPE__ */
export default DDSFilterModalButton;