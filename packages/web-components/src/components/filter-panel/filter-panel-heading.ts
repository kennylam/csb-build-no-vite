/**
 * @license
 *
 * Copyright IBM Corp. 2021, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html, property, customElement, LitElement } from 'lit-element';
import ddsSettings from '../../internal/vendor/@carbon/ibmdotcom-utilities/utilities/settings/settings';
import styles from './filter-panel.scss';
import StableSelectorMixin from '../../globals/mixins/stable-selector';

const { stablePrefix: ddsPrefix } = ddsSettings;

/**
 * The heading content of filter panel.
 *
 * @element dds-filter-panel-heading
 */
@customElement(`${ddsPrefix}-filter-panel-heading`)
class DDSFilterPanelHeading extends StableSelectorMixin(LitElement) {
  /**
   * The shadow slot this heading content should be in.
   */
  @property({ reflect: true })
  slot = 'heading';

  connectedCallback() {
    if (!this.hasAttribute('role')) {
      this.setAttribute('role', 'heading');
    }
    if (!this.hasAttribute('aria-level')) {
      this.setAttribute('aria-level', '1');
    }
    super.connectedCallback();
  }

  protected _handleSlotChange = () => {
    const { eventChange } = this.constructor as typeof DDSFilterPanelHeading;
    this.dispatchEvent(
      new CustomEvent(eventChange, {
        bubbles: true,
        cancelable: true,
        composed: true,
      })
    );
  };

  render() {
    return html` <slot @slotchange=${this._handleSlotChange}></slot> `;
  }

  static get stableSelector() {
    return `${ddsPrefix}--filter-panel-heading`;
  }

  /**
   * The event name when this element changes.
   */
  static get eventChange() {
    return `${ddsPrefix}-filter-panel-heading-change`;
  }

  // `styles` here is a `CSSResult` generated by custom WebPack loader
  static styles = styles;
}

/* @__GENERATE_REACT_CUSTOM_ELEMENT_TYPE__ */
export default DDSFilterPanelHeading;
