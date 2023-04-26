import {registerBlockType} from '@wordpress/blocks'
import {RichText, useBlockProps} from '@wordpress/block-editor'
import {__} from '@wordpress/i18n'
import block from './block.json'
import './main.css'

registerBlockType(block.name, {
    edit({attributes, setAttributes}) {
        const {content} = attributes;
        const blockProps = useBlockProps({
            className: 'fancy-header'
        });

        return (<RichText
                    {...blockProps}
                    tagName='h2'
                    placeholder={__('Enter Heading', 'udemy-plus')}
                    value={content}
                    onChange={newValue => setAttributes({ content: newValue })}
                />
        );
    },
    save({attributes}) {
        const {content} = attributes;
        const blockProps = useBlockProps.save({
            className: 'fancy-header'
        });

        return (<RichText.Content
            {...blockProps}
            tagName='h2'
            value={content}
            />);
    }
});