if(Meteor.isServer) {
  Router.route('/(.*)', function () {
    var host = Meteor.absoluteUrl();
    var redirectHost = host.replace(/(^https?:\/\/)?(www\.)?(.*$)/gim, '$1$3');
    if(host != redirectHost) {
      var redirectUrl = redirectHost+(this.params[0]||'');
      
      if(redirectUrl) {
        this.response.writeHead(301, {
          'Location': redirectUrl
        });
        this.response.end();
      }
    } else {
      this.response.write('Do not deploy this project to '+host+' as it does not have a www.');
      this.response.end();
    }
  }, { where: 'server' });
}