module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: function( req, reply ){
      reply.view("index");
    }
  },
  {
    method: 'POST',
    path: '/',
    handler: function( req, reply ){
      console.log(req);
      reply().code(201);
    }
  },
  {
    method: 'GET',
    path: '/js/{param*}',
    handler: {
      directory: {
        path: 'public/js/'
      }
    }
  },
  {
    method: 'GET',
    path: '/css/{param*}',
    handler: {
      directory: {
        path: 'public/css/'
      }
    }
  }
]
