var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * History Model
 * ==========
 */

var History = new keystone.List('History', {
	map: { name: 'year' },
	autokey: { path: 'key', from: 'year', unique: true },
	defaultSort: 'year',
	label: '活動履歴',
	plural: '活動履歴',
});

History.add({
	year: {
		type: Types.Select,
		options: '2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025,2026,2027,2028',
		index: true,
		label: '年'
	},
	content: {
		type: Types.Html,
		wysiwyg: true,
		height: 400,
		label: '内容'
	},
});

History.defaultColumns = 'year|20%, content';
History.register();
