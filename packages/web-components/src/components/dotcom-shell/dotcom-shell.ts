/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html, customElement, LitElement } from 'lit-element';
import settings from 'carbon-components/es/globals/js/settings.js';
import ddsSettings from '../../internal/vendor/@carbon/ibmdotcom-utilities/utilities/settings/settings';
import StableSelectorMixin from '../../globals/mixins/stable-selector';
import styles from './dotcom-shell.scss';

const { prefix } = settings;
const { stablePrefix: ddsPrefix } = ddsSettings;

/**
 * Dotcom shell.
 *
 * @element dds-dotcom-shell
 */
@customElement(`${ddsPrefix}-dotcom-shell`)
class DDSDotcomShell extends StableSelectorMixin(LitElement) {
  render() {
    return html`
      <div class="${prefix}--dotcom-shell__content">
        <slot></slot>
      </div>
    `;
  }

  static get stableSelector() {
    return `${ddsPrefix}--dotcom-shell`;
  }

  static styles = styles; // `styles` here is a `CSSResult` generated by custom WebPack loader
}

/* @__GENERATE_REACT_CUSTOM_ELEMENT_TYPE__ */
export default DDSDotcomShell;