var router = require('koa-router')();

router.get('/', function *(next) {
  this.body = 'this a users response!';
});

router.post('/post/formdata', function *(next) {
  console.dir(this.req.body)
  console.dir(this.req.files)

  this.body = 'this a users response!';
});

module.exports = router;
