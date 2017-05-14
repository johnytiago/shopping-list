module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: function( req, reply ){
      reply.view("index");
    }
  },
  {
    method: 'GET',
    path: '/{param}',
    handler: {
      directory: {
        path: 'public/'
      }
    }
  }
]
