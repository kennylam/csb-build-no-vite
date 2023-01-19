/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { customElement } from 'lit-element';
import deprecate from '../../internal/vendor/@carbon/ibmdotcom-utilities/utilities/deprecate/deprecate';
import ddsSettings from '../../internal/vendor/@carbon/ibmdotcom-utilities/utilities/settings/settings';
import StableSelectorMixin from '../../globals/mixins/stable-selector';

import styles from './card-section-images.scss';
import DDSContentSection from '../content-section/content-section';

const { stablePrefix: ddsPrefix } = ddsSettings;

/**
 * The Card Section Images pattern
 *
 * @element dds-card-section-images
 */
@customElement(`${ddsPrefix}-card-section-images`)
class DDSCardSectionImages extends StableSelectorMixin(DDSContentSection) {
  static get stableSelector() {
    return `${ddsPrefix}--card-section-images`;
  }

  static styles = styles; // `styles` here is a `CSSResult` generated by custom WebPack loader
}

export default deprecate(
  /* @__GENERATE_REACT_CUSTOM_ELEMENT_TYPE__ */
  DDSCardSectionImages,
  'The dds-card-section-images component has been merged with the dds-card-section component ' +
    'See dds-card-section documentation for more information.'
);