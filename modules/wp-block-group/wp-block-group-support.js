const { addFilter } = wp.hooks;
const { assign, merge } = lodash;

function filterGroupBlockSupport(settings, name) {
	if (name === 'core/group') {
		return assign({}, settings, {
			supports: merge(settings.supports, {
				align: ['full','wide'],
        color: {
          gradients: false,
          __experimentalDuotone: false
        },
        __experimentalLayout: false
			}),
		});
	}
	return settings;
}

addFilter(
	'blocks.registerBlockType',
	'config-block-editor/wp-block-group/supports',
	filterGroupBlockSupport,
);
