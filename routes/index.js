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
const getPosts = () => {
	return Promise.resolve().then(() => {
		return Post.model
			.find()
			.where('state', 'published')
			.sort('-publishedDate')
			.exec((err, results) => {
				if (err) throw err
				return results
			})
		})
}

const typeDefs = gql`
type Post {
	title: String!
	text: String!
	_id: String!
}
type Query {
  posts: [Post]
}
`;

const resolvers = {
	Query: {
		posts: () => getPosts()
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
		console.log('POSTED')
		console.log(req.body, res.body);
		// const actualPage = '/contact'
		// const queryParams = { contactFormPosted: true, body: req.body }
		// nextApp.render(req, res, actualPage, queryParams)
		

		const newEnquiry = new Enquiry.model();
		const updater = newEnquiry.getUpdateHandler(req);

		updater.process(req.body, {
			flashErrors: true,
			fields: 'name, company, email, phone, enquiryType, message',
			errorMessage: 'There was a problem submitting your enquiry:',
		}, function (err) {
			const actualPage = '/contact'
			const queryParams = { contactFormPosted: true, body: req.body }
			nextApp.render(req, res, actualPage, queryParams)
		});
	})

	keystoneApp.get('*', (req, res) => {
		return handle(req, res);
	});
};