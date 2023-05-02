import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import icons from '../../icons.js'
import './main.css'

registerBlockType('udemy-plus/header-tools', {
  icon: {
    src: icons.primary
  },
  edit({ attributes, setAttributes }) {
    const {showAuth} = attributes;
    const blockProps = useBlockProps();

    return (
      <>
        <InspectorControls>
          <PanelBody title={ __('General', 'udemy-plus') }>
            <SelectControl
              label={__('Show Login/Register Link', 'udemy-plus')}
              value={showAuth}
              options={[
                { label: __('No', 'udemy-plus'), value: false },
                { label: __('Yes', 'udemy-plus'), value: true }
              ]}
              onChange={newVal => setAttributes({showAuth: (newVal === 'true')})}
            />
          </PanelBody>
        </InspectorControls>
        <div { ...blockProps }>
          <a className="signin-link open-modal" href="#">
            <div className="signin-icon">
              <i className="bi bi-person-circle"></i>
            </div>
            <div className="signin-text">
              <small>Hello, Sign in</small>
              My Account
            </div>
          </a>
        </div>
      </>
    );
  }
});