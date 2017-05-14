module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: function( req, reply ){
      reply("Hello World");
    }
  }
]
