import { registerBlockType } from '@wordpress/blocks';
import { 
  useBlockProps,
  InspectorControls,
  RichText
} from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n'
import { ToggleControl, PanelBody } from '@wordpress/components';
import icons from '../../icons.js'
import './main.css'

registerBlockType('udemy-plus/page-header', {
  icon: icons.primary,
	edit({attributes, setAttributes}) {
        const {content, showCategory} = attributes;
        const blockProps = useBlockProps();

        return (
        <>
            <InspectorControls>
                <PanelBody title={__('General', 'udemy-plus')}>
                    <ToggleControl
                        label={__('Show Category', 'udemy-plus')}
                        checked={ showCategory }
                        onChange={ (showCategory) => {setAttributes({showCategory})} }
                        help={showCategory ? __('Category Shown', 'udemy-plus') : __('Custom content shown', 'udemy-plus')}
                    />
                </PanelBody>
            </InspectorControls>
            <div {...blockProps}>
                <div className="inner-page-header">
                    {
                        showCategory ? 
                        <h1>{__('Category: Some Category', 'udemy-plus')}</h1> : 
                        <RichText
                            tagName='h1'
                            placeholder={__('Heading', 'udemy-plus')}
                            value={content}
                            onChange={(content) => {setAttributes({content})}}
                        />
                    }
                </div>
            </div>
        </>
        );
  }
});