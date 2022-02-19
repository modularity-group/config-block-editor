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
	if (name === 'core/cover') {
		return assign({}, settings, {
			attributes: merge(settings.attributes, {
				spaceBefore: {
					type: 'boolean',
					default: false,
				},
        spaceAfter: {
					type: 'boolean',
					default: false,
				},
			}),
		});
	}
	return settings;
}

addFilter(
	'blocks.registerBlockType',
	'config-block-editor/wp-block-cover/add-attributes',
	addAttributes,
);

/**
 * Add control to Button block
 */
const addInspectorControl = createHigherOrderComponent((BlockEdit) => {
	return (props) => {
		const {
			attributes: { spaceBefore, spaceAfter },
			setAttributes,
			name,
		} = props;

		if (name !== 'core/cover') {
			return <BlockEdit {...props} />;
		}

		return (
			<Fragment>
				<BlockEdit {...props} />
				<InspectorControls>
					<PanelBody title={__('Spacing', 'modularity')} initialOpen={true}>
						<ToggleControl
							label={__('Space before', 'modularity')}
              checked={ !! spaceBefore }
							onChange={() => {
								setAttributes({ spaceBefore: ! spaceBefore });
							}}
						/>
            <ToggleControl
							label={__('Space after', 'modularity')}
              checked={ !! spaceAfter }
							onChange={() => {
								setAttributes({ spaceAfter: ! spaceAfter });
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
	'config-block-editor/wp-block-cover/add-inspector-controls',
	addInspectorControl,
);

/**
 * Add class to the block in the editor
 */
const addSpaceClassEditor = createHigherOrderComponent((BlockListBlock) => {
	return (props) => {
		const {
			attributes: { spaceBefore, spaceAfter },
			className,
			name,
		} = props;

		if (name !== 'core/cover') {
			return <BlockListBlock {...props} />;
		}

		return (
			<BlockListBlock
				{...props}
				className={classnames(className, spaceBefore ? `has-space-before` : '', spaceAfter ? `has-space-after` : '' )}
			/>
		);
	};
}, 'withClientIdClassName');

addFilter(
	'editor.BlockListBlock',
	'config-block-editor/wp-block-cover/add-editor-class',
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
	if (block.name !== 'core/cover') {
		return props;
	}

	const { className } = props;
	const { spaceBefore, spaceAfter } = attributes;

	return assign({}, props, {
		className: classnames(className, spaceBefore ? `has-space-before` : '', spaceAfter ? `has-space-after` : ''),
	});
}

// Comment out to test the PHP approach defined in intro-to-block-filters.php
addFilter(
	'blocks.getSaveContent.extraProps',
	'config-block-editor/wp-block-cover/add-front-end-class',
	addSpaceClassFrontEnd,
);
