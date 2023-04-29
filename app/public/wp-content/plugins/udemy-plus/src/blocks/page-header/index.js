import { registerBlockType } from '@wordpress/blocks';
import { 
  useBlockProps
} from '@wordpress/block-editor';
import icons from '../../icons.js'
import './main.css'

registerBlockType('udemy-plus/page-header', {
  icon: icons.primary,
	edit() {
    const blockProps = useBlockProps();

    return (
      <>
        <div { ...blockProps }>
          Page Header
        </div>
      </>
    );
  }
});