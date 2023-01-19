/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { customElement } from 'lit-element';
import BXModalFooter from '@carbon/web-components/es/components/modal/modal-footer.js';
import ddsSettings from '../../internal/vendor/@carbon/ibmdotcom-utilities/utilities/settings/settings';
import StableSelectorMixin from '../../globals/mixins/stable-selector';
import './filter-panel-input-select';
import styles from './filter-panel.scss';

const { stablePrefix: ddsPrefix } = ddsSettings;

/**
 * extends the BXModalFooter
 *
 * @element dds-filter-modal-footer
 */
@customElement(`${ddsPrefix}-filter-modal-footer`)
class DDSFilterModalFooter extends StableSelectorMixin(BXModalFooter) {
  static get stableSelector() {
    return `${ddsPrefix}-filter-modal-footer`;
  }

  static styles = styles; // `styles` here is a `CSSResult` generated by custom WebPack loader
}

/* @__GENERATE_REACT_CUSTOM_ELEMENT_TYPE__ */
export default DDSFilterModalFooter;
