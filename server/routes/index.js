var list = [];

module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: function( req, reply ){
      reply.view("index", {item: list});
    }
  },
  {
    method: 'POST',
    path: '/item',
    handler: function( req, reply ){
      const item = req.payload.item;
      console.log("Received an item: " + item)
      list.push( item )
      reply().code(200);
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
