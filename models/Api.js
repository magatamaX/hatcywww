var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Profile Model
 * ==========
 */

var Api = new keystone.List('Api', {
	nocreate: true,
	label: 'API',
	plural: 'API',
});

Api.add({
	name: {
		type: String,
		required: true,
		label: 'API Name'
	},
	key: {
		type: String,
		label: 'key'
	},
	playlistId: {
		type: String,
		label: 'Playlist ID'
	}
});


Api.register();
