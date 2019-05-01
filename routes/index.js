/**
 * This file is where you define your application routes and controllers.
 *
 * Start by including the middleware you want to run for every request;
 * you can attach middleware to the pre('routes') and pre('render') events.
 *
 * For simplicity, the default setup for route controllers is for each to be
 * in its own file, and we import all the files in the /routes/views directory.
 *
 * Each of these files is a route controller, and is responsible for all the
 * processing that needs to happen for the route (e.g. loading data, handling
 * form submissions, rendering the view template, etc).
 *
 * Bind each route pattern your application should respond to in the function
 * that is exported from this module, following the examples below.
 *
 * See the Express application routing documentation for more information:
 * http://expressjs.com/api.html#app.VERB
 */

const keystone = require('keystone');
const Enquiry = keystone.list('Enquiry');

// GraphQL用サーバ設定
const { ApolloServer, gql } = require('apollo-server-express');
const express = require('express');
const graphQLServer = express();

const Post = keystone.list('Post');
const getPosts = (skip, limit) => {
	return Promise.resolve().then(() => {
		return Post.model
			.find()
			.where('state', 'published')
			.sort('-publishedDate')
			.skip(skip)
			.limit(limit)
			.exec((err, results) => {
				if (err) throw err
				return results
			})
		})
}
const getCurrentPost = (slug) => {
	return Promise.resolve().then(() => {
		return Post.model
			.findOne({
				slug: slug
			})
			.exec((err, result) => {
				if (err) throw err
				return result
			})
		})
}

const Profile = keystone.list('Profile');
const getProfile = () => {
	return Promise.resolve().then(() => {
		return Profile.model
			.find()
			.exec((err, results) => {
				if (err) throw err
				return results
			})
		})
}

const History = keystone.list('History');
const getHistory = () => {
	return Promise.resolve().then(() => {
		return History.model
			.find()
			.sort('-year')
			.exec((err, results) => {
				if (err) throw err
				return results
			})
		})
}

const typeDefs = gql`
scalar Date
type Image {
	secure_url: String
	url: String
	resource_type: String
	format: String
	height: String
	width: String
	signature: String
	version: String
	public_id: String
}
type Post {
	_id: String
	slug: String
	title: String
	state: String
	author: String
	content: String
	publishedDate: Date
	image: Image
}
type Profile {
	title: String
	content: String
}
type History {
	year: String
	content: String
}
type Query {
	posts(limit: Int, skip: Int): [Post]
	currentPost(slug: String!): Post 
	profile: [Profile]
	history: [History]
}
`;

const resolvers = {
	Query: {
		posts: (_, { skip, limit }) => getPosts(skip, limit),
		currentPost: ( _, { slug }) => getCurrentPost(slug),
		profile: () => getProfile(),
		history: () => getHistory()
	},
};

const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app: graphQLServer });


// Setup Route Bindings
exports = module.exports = nextApp => keystoneApp => {

	// GraphQL用のサーバーをPort:4000で立てる
	graphQLServer.listen({ port: 4000 })

	// Next request handler
	const handle = nextApp.getRequestHandler();

	keystoneApp.post('/contact/post', (req, res, next) => {

		const newEnquiry = new Enquiry.model();
		const updater = newEnquiry.getUpdateHandler(req);

		updater.process(req.body, {
			flashErrors: true,
			fields: 'name, company, email, phone, enquiryType, message',
			errorMessage: 'There was a problem submitting your enquiry:',
		}, function (err) {
			if (err) console.log(err)
			const actualPage = '/contact'
			nextApp.render(req, res, actualPage)
		});
	})

	keystoneApp.get('/information/p/:slug', (req, res) => {
		const actualPage = '/post'
		const queryParams = { slug: req.params.slug }
		nextApp.render(req, res, actualPage, queryParams)
	})

	keystoneApp.get('*', (req, res) => {
		return handle(req, res);
	});
};