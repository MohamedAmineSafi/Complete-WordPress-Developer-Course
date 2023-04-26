import {registerBlockType} from '@wordpress/blocks'
import {RichText} from '@wordpress/block-editor'
import {__} from '@wordpress/i18n'
import block from './block.json'

registerBlockType(block.name, {
    edit({attributes, setAttributes}) {
        const {content} = attributes;

        return (<RichText
                    tagName='h2'
                    placeholder={__('Enter Heading', 'udemy-plus')}
                    value={content}
                    onChange={newValue => setAttributes({ content: newValue })}
                />
        );
    }
});