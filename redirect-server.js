if(Meteor.isServer) {
  Router.route('/(.*)', function () {
    var host = Meteor.absoluteUrl();
    var redirectHost = host.replace(/(^https?:\/\/)?(.*)?(\.meteor.com$)/gim, '$1$2.com');
    if(host != redirectHost) {
      var redirectUrl = redirectHost+(this.params[0]||'');
      
      if(redirectUrl) {
        this.response.writeHead(301, {
          'Location': redirectUrl
        });
        this.response.end();
      }
    } else {
      this.response.write('Do not deploy this project to '+host+' as it is not a whatever.meteor.com url.');
      this.response.end();
    }
  }, { where: 'server' });
}