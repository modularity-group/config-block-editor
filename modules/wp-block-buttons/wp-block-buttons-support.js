const { addFilter } = wp.hooks;
const { assign, merge } = lodash;

function filterCoverBlockSupport(settings, name) {
	if (name === 'core/buttons') {
		return assign({}, settings, {
			supports: merge(settings.supports, {
				align: ['full','wide'],
        color: {
          gradients: false,
          __experimentalDuotone: false
        }
			}),
		});
	}
	return settings;
}

addFilter(
	'blocks.registerBlockType',
	'config-block-editor/wp-block-cover/supports',
	filterCoverBlockSupport,
);
