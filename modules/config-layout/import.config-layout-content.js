/* eslint-disable react/jsx-props-no-spreading, react/prop-types */
import classnames from 'classnames';

const { assign, merge } = lodash;

const { __ } = wp.i18n;
const { addFilter } = wp.hooks;
const { createHigherOrderComponent } = wp.compose;
const { Fragment } = wp.element;
const { InspectorControls } = wp.blockEditor;
const { PanelBody, SelectControl } = wp.components;

/**
 * Add spacing attributes to all blocks
 *
 * @param  {Object} settings Original block settings
 * @param  {string} name     Block name
 * @return {Object}          Filtered block settings
 */
function addContentAttributes(settings, name) {
	if (name === 'core/group' || name === 'core/cover') {
		return assign({}, settings, {
			attributes: merge(settings.attributes, {
        innerContent: {
					type: 'string',
					default: '',
				},
			}),
		});
	}
	return settings;
}

addFilter(
	'blocks.registerBlockType',
	'config-block-editor/content/add-attributes',
	addContentAttributes,
);

const addContentInspectorControl = createHigherOrderComponent((BlockEdit) => {
	return (props) => {
		const {
			attributes: { innerContent },
			setAttributes,
			name,
		} = props;

		if (name !== 'core/group' && name !== 'core/cover') {
			return <BlockEdit {...props} />;
		}

		return (
			<Fragment>
				<BlockEdit {...props} />
				<InspectorControls>
					<PanelBody title={__('Content', 'modularity')} initialOpen={true}>
            <SelectControl
              label={__('Inner content', 'modularity')}
              value={innerContent}
              options={[
                {
                  label: __('Full width', 'modularity'),
                  value: ''
                },
                {
                  label: __('Layout width', 'modularity'),
                  value: 'wide'
                },
                {
                  label: __('Content width', 'modularity'),
                  value: 'content',
                },
              ]}
              onChange={(value) => {
                setAttributes({ innerContent: value });
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
	'config-block-editor/content/add-inspector-controls',
	addContentInspectorControl,
);

/**
 * Add class to the block in the editor
 */
const addContentClassEditor = createHigherOrderComponent((BlockListBlock) => {
	return (props) => {
		const {
			attributes: { innerContent },
			className,
			name,
		} = props;

		if (name !== 'core/group' && name !== 'core/cover') {
			return <BlockListBlock {...props} />;
		}

		return (
			<BlockListBlock
				{...props}
				className={classnames(className, innerContent ? `inner-align${innerContent}` : '' )}
			/>
		);
	};
}, 'withClientIdClassName');

addFilter(
	'editor.BlockListBlock',
	'config-block-editor/content/add-editor-class',
	addContentClassEditor,
);

/**
 * Add class to the block on the front end
 *
 * @param  {Object} props      Additional props applied to save element.
 * @param  {Object} block      Block type.
 * @param  {Object} attributes Current block attributes.
 * @return {Object}            Filtered props applied to save element.
 */
function addContentClassFrontEnd(props, block, attributes) {
	if (block.name !== 'core/group' && block.name !== 'core/cover') {
		return props;
	}

	const { className } = props;
	const { innerContent } = attributes;

	return assign({}, props, {
		className: classnames(className, innerContent ? `inner-align${innerContent}` : ''),
	});
}

// Comment out to test the PHP approach defined in intro-to-block-filters.php
addFilter(
	'blocks.getSaveContent.extraProps',
	'config-block-editor/content/add-front-end-class',
	addContentClassFrontEnd,
);
