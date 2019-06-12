var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Gallery Model
 * =============
 */

var Gallery = new keystone.List('Gallery', {
    map: { name: 'title' },
    autokey: { path: 'key', from: 'id', unique: true },
    defaultSort: '-date',
    label: '写真',
    plural: '写真',
});

Gallery.add({
    title: {
        type: String,
        required: true,
        initial: true,
        label: '写真のタイトル'
    },
	image: {
        type: Types.CloudinaryImage,
        initial: true,
		label: '画像'
    },
    date: {
        type: Types.Date,
		label: '日付'
    },
    place: {
        type: String,
        label: '場所'
    },
    placeUrl: {
        type: String,
        label: '場所のURL'
    }
});

Gallery.defaultColumns = 'title|20%, image|20%, date';
Gallery.register();
