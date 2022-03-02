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
 * Add spacing attributes to all blocks
 *
 * @param  {Object} settings Original block settings
 * @param  {string} name     Block name
 * @return {Object}          Filtered block settings
 */
function addSpacingAttributes(settings, name) {
	//if (name === 'core/buttons') {
		return assign({}, settings, {
			attributes: merge(settings.attributes, {
				spaceBefore: {
					type: 'boolean',
					default: false,
				},
        spaceAfter: {
					type: 'boolean',
					default: false,
				}
			}),
		});
	//}
	return settings;
}

addFilter(
	'blocks.registerBlockType',
	'config-block-editor/layout-spacing/add-attributes',
	addSpacingAttributes,
);

/**
 * Add control to Button block
 */
const addSpacingInspectorControl = createHigherOrderComponent((BlockEdit) => {
	return (props) => {
		const {
			attributes: { spaceBefore, spaceAfter },
			setAttributes,
			name,
		} = props;

		/*if (name !== 'core/buttons') {
			return <BlockEdit {...props} />;
		}*/

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
	'config-block-editor/layout-spacing/add-inspector-controls',
	addSpacingInspectorControl,
);

/**
 * Add class to the block in the editor
 */
const addSpacingClassEditor = createHigherOrderComponent((BlockListBlock) => {
	return (props) => {
		const {
			attributes: { spaceBefore, spaceAfter },
			className,
			name,
		} = props;

		/*if (name !== 'core/buttons') {
			return <BlockListBlock {...props} />;
		}*/

		return (
			<BlockListBlock
				{...props}
				className={classnames(className, spaceBefore ? `has-space-before` : '', spaceAfter ? `has-space-after` : '')}
			/>
		);
	};
}, 'withClientIdClassName');

addFilter(
	'editor.BlockListBlock',
	'config-block-editor/layout-spacing/add-editor-class',
	addSpacingClassEditor,
);

/**
 * Add class to the block on the front end
 *
 * @param  {Object} props      Additional props applied to save element.
 * @param  {Object} block      Block type.
 * @param  {Object} attributes Current block attributes.
 * @return {Object}            Filtered props applied to save element.
 */
function addSpacingClassFrontEnd(props, block, attributes) {
	/*if (block.name !== 'core/buttons') {
		return props;
	}*/

	const { className } = props;
	const { spaceBefore, spaceAfter } = attributes;

	return assign({}, props, {
		className: classnames(className, spaceBefore ? `has-space-before` : '', spaceAfter ? `has-space-after` : ''),
	});
}

addFilter(
	'blocks.getSaveContent.extraProps',
	'config-block-editor/layout-spacing/add-front-end-class',
	addSpacingClassFrontEnd,
);
