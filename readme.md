# config-block-editor

Tune the block-editor and some crucial wp-blocks for a minimal resetted setup.

---

Version: 1.2.1

Author: Matze @ https://modularity.group

License: MIT

---

- wp-block reset and base styling
- finetuned block-support
- adds simple base-variable defined spacing- and layout-settings for `.wp-block-cover`, `.wp-block-columns`, `.wp-block-group`, `.wp-block-heading` and `.wp-block-buttons`

Usage for site-layout: use `.site-layout-container` in frontend as container for block-output

---

1.2.1
- layout fix for inconsistant inner blocks of `wp-block-group` + `wp-block-cover`

1.2.0
- Improve layout settings: space before and space after is a global setting for all blocks now
- Add innerContent setting for `core/group` and `core/cover` with settings: `Full width` (default), `Layout width` and `Content width`
- disable core (experimanetal) layout-settings panel for `core/group`
- fix some detail-styling for block offsets 

1.1.5 | layout fixes

1.1.4 | spacing & layout > boxed also for wp-block-group

1.1.3 | add config-layout theme-support settings

1.1.2 | finetune layout settings

1.1.1 | little layout fix

1.1.0 | add spacing settings also for `.wp-block-heading`and `.wp-block-button`

1.0.1 | fix layout styles

1.0.0 | init

---

**Development**

`npm install && npm run build`

**Resources**

https://developer.wordpress.org/block-editor/reference-guides/theme-json-reference/theme-json-living/
https://css-tricks.com/a-crash-course-in-wordpress-block-filters/
