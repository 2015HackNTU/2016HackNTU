module.exports = function(app){
  app.get('/yolo', function(req, res){
		res.render('yolo')
	})
	app.get('/', function(req, res){
		res.render('index')
	})
}
