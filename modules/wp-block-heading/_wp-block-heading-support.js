const { addFilter } = wp.hooks;
const { assign, merge } = lodash;

function filterHeadingBlockSupport(settings, name) {
	if (name === 'core/heading') {
    console.log('settings.supports',settings.supports);
		return assign({}, settings, {
			supports: merge(settings.supports, {
				align: true
			}),
		});
	}
	return settings;
}

addFilter(
	'blocks.registerBlockType',
	'config-block-editor/wp-block-heading/supports',
	filterHeadingBlockSupport,
);
