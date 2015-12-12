Meteor.publish('apikeys',function(){
	return APIKeys.find();
});