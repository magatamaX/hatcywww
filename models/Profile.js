var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Profile Model
 * ==========
 */

var Profile = new keystone.List('Profile', {
	map: { name: 'title' },
	label: 'プロフィール',
	plural: 'プロフィール',
	nodelete: true,
});

Profile.add({
	title: {
		type: String,
		required: true,
		label: 'タイトル'
	},
	content: {
		type: Types.Html,
		wysiwyg: true,
		height: 400,
		label: '本文'
	},
});


Profile.defaultColumns = 'title|20%, content';
Profile.register();
