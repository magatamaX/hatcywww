var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Post Model
 * ==========
 */

var Post = new keystone.List('Post', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
	defaultSort: '-publishedDate',
	label: 'お知らせ',
	plural: 'お知らせ',
});

Post.add({
	title: {
		type: String,
		required: true,
		label: 'タイトル'
	},
	state: {
		type: Types.Select,
		options: 'draft, published, archived',
		default: 'published',
		index: true,
		label: '状態'
	},
	author: {
		type: Types.Relationship,
		ref: 'User',
		index: true,
		label: '投稿者'
	},
	publishedDate: {
		type: Types.Date,
		index: true,
		label: '公開日',
		dependsOn: {
			state: 'published'
		}
	},
	image: {
		type: Types.CloudinaryImage,
		label: '画像'
	},
	content: {
		type: Types.Html,
		wysiwyg: true,
		height: 400,
		label: '本文'
	},
});

Post.schema.virtual('content.full').get(function () {
	return this.content;
});

Post.defaultColumns = 'title, state|20%, author|20%, publishedDate|20%';
Post.register();
