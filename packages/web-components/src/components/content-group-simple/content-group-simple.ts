/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { css, customElement } from 'lit-element';
import ddsSettings from '../../internal/vendor/@carbon/ibmdotcom-utilities/utilities/settings/settings';
import StableSelectorMixin from '../../globals/mixins/stable-selector';
import DDSContentGroup from '../content-group/content-group';
import styles from './content-group-simple.scss';

const { stablePrefix: ddsPrefix } = ddsSettings;

/**
 * Simple version of content group.
 *
 * @element dds-content-group-simple
 */
@customElement(`${ddsPrefix}-content-group-simple`)
class DDSContentGroupSimple extends StableSelectorMixin(DDSContentGroup) {
  static get stableSelector() {
    return `${ddsPrefix}--content-group-simple`;
  }

  // `styles` here is a `CSSResult` generated by custom WebPack loader
  static get styles() {
    return css`
      ${super.styles}${styles}
    `;
  }
}

/* @__GENERATE_REACT_CUSTOM_ELEMENT_TYPE__ */
export default DDSContentGroupSimple;