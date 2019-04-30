var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Enquiry Model
 * =============
 */

var Enquiry = new keystone.List('Enquiry', {
	nocreate: true,
	noedit: true,
	label: 'お問い合わせ',
	plural: 'お問い合わせ',
});

Enquiry.add({
	name: {
		type: Types.Name,
		required: true,
		label: '氏名'
	},
	company: {
		type: String,
		label: 'ご所属（会社名等）'
	},
	email: {
		type: Types.Email,
		required: true,
		label: 'メールアドレス'
	},
	phone: {
		type: String,
		label: '電話番号'
	},
	enquiryType: {
		type: Types.Select,
		label: 'お問合せの種類',
		required: true,
		options: [
			{ value: 'request', label: 'お仕事のご依頼' },
			{ value: 'other', label: 'その他のお問い合わせ' }
		]
	},
	message: {
		type: Types.Markdown,
		required: true,
		label: 'メッセージ'
	},
	createdAt: {
		type: Date,
		default: Date.now,
		label: '受信日時'
	},
});

Enquiry.schema.pre('save', function (next) {
	this.wasNew = this.isNew;
	next();
});

Enquiry.schema.post('save', function () {
	if (this.wasNew) {
		this.sendNotificationEmail();
	}
});

Enquiry.schema.methods.sendNotificationEmail = function (callback) {
	if (typeof callback !== 'function') {
		callback = function (err) {
			if (err) {
				console.error('There was an error sending the notification email:', err);
			}
		};
	}

	if (!process.env.MAILGUN_API_KEY || !process.env.MAILGUN_DOMAIN) {
		console.log('Unable to send email - no mailgun credentials provided');
		return callback(new Error('could not find mailgun credentials'));
	}

	var enquiry = this;
	var brand = keystone.get('brand');

	keystone.list('User').model.find().where('isAdmin', true).exec(function (err, admins) {
		if (err) return callback(err);
		new keystone.Email({
			templateName: 'enquiry-notification',
			transport: 'mailgun',
		}).send({
			to: process.env.MAILGUN_SENDTO_ADDRESS,
			from: {
				name: 'お問合せフォーム',
				email: 'noreply@mail.tokushimahatchy.com',
			},
			subject: '【お問合せフォーム】新しいお問合せを受信しました。',
			enquiry: enquiry,
			brand: brand,
		}, callback);
	});
};

Enquiry.defaultSort = '-createdAt';
Enquiry.defaultColumns = 'name, email, enquiryType, createdAt';
Enquiry.register();
