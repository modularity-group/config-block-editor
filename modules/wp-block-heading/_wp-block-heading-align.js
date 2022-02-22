/* eslint-disable react/jsx-props-no-spreading, react/prop-types */
import classnames from 'classnames';

const { assign, merge } = lodash;

const { __ } = wp.i18n;
const { addFilter } = wp.hooks;
const { createHigherOrderComponent } = wp.compose;
const { Fragment } = wp.element;
const { InspectorControls } = wp.blockEditor;
const { PanelBody, ToggleControl } = wp.components;

/**
 * Add attribute to Button block
 *
 * @param  {Object} settings Original block settings
 * @param  {string} name     Block name
 * @return {Object}          Filtered block settings
 */
function addAttributes(settings, name) {
	if (name === 'core/heading') {
		return assign({}, settings, {
			attributes: merge(settings.attributes, {
				isWide: {
					type: 'boolean',
					default: false,
				}
			}),
		});
	}
	return settings;
}

addFilter(
	'blocks.registerBlockType',
	'config-block-editor/wp-block-heading/add-attributes',
	addAttributes,
);

/**
 * Add control to Button block
 */
const addInspectorControl = createHigherOrderComponent((BlockEdit) => {
	return (props) => {
		const {
			attributes: { isWide },
			setAttributes,
			name,
		} = props;

		if (name !== 'core/heading') {
			return <BlockEdit {...props} />;
		}

		return (
			<Fragment>
				<BlockEdit {...props} />
				<InspectorControls>
					<PanelBody title={__('Layout', 'modularity')} initialOpen={true}>
						<ToggleControl
							label={__('Wide', 'modularity')}
              checked={ !! isWide }
							onChange={() => {
								setAttributes({ isWide: ! isWide });
							}}
						/>
					</PanelBody>
				</InspectorControls>
			</Fragment>
		);
	};
}, 'withInspectorControl');

addFilter(
	'editor.BlockEdit',
	'config-block-editor/wp-block-heading/add-inspector-controls',
	addInspectorControl,
);

/**
 * Add class to the block in the editor
 */
const addSpaceClassEditor = createHigherOrderComponent((BlockListBlock) => {
	return (props) => {
		const {
			attributes: { isWide },
			className,
			name,
		} = props;

		if (name !== 'core/heading') {
			return <BlockListBlock {...props} />;
		}

		return (
			<BlockListBlock
				{...props}
				className={classnames(className, isWide ? `is-wide` : '')}
			/>
		);
	};
}, 'withClientIdClassName');

addFilter(
	'editor.BlockListBlock',
	'config-block-editor/wp-block-heading/add-editor-class',
	addSpaceClassEditor,
);

/**
 * Add class to the block on the front end
 *
 * @param  {Object} props      Additional props applied to save element.
 * @param  {Object} block      Block type.
 * @param  {Object} attributes Current block attributes.
 * @return {Object}            Filtered props applied to save element.
 */
function addSpaceClassFrontEnd(props, block, attributes) {
	if (block.name !== 'core/heading') {
		return props;
	}

	const { className } = props;
	const { isWide } = attributes;

	return assign({}, props, {
		className: classnames(className, isWide ? `is-wide` : ''),
	});
}

// Comment out to test the PHP approach defined in intro-to-block-filters.php
addFilter(
	'blocks.getSaveContent.extraProps',
	'config-block-editor/wp-block-heading/add-front-end-class',
	addSpaceClassFrontEnd,
);
