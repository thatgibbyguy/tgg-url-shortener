var Schemas = {};

APIKeys = new Mongo.Collection('apikeys');

Schemas.APIKeysSchema = new SimpleSchema({
	owner: {
		type: String,
		label: "API Key Owner"
	},
	key: {
		type: String,
		label: "API Key"
	}
});

APIKeys.attachSchema(Schemas.APIKeysSchema);
