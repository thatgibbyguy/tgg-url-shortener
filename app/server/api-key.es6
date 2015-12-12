Meteor.methods({
  initApiKey: function( userId ) {
    check( userId, Match.OneOf( Meteor.userId(), String ) );

    let newKey = Random.hexString( 32 );

    try {
      let key = APIKeys.insert({
        "owner": userId,
        "key": newKey
      });
      return key;
    }
    
    catch( exception ) {
      return exception;
    }
  }
});