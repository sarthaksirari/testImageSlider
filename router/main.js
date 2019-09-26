module.exports = function (app) {
   app.get('/', function (req, res) {
      res.render('index.html')
   });
   app.get('/cloud-cover', function (req, res) {
      res.render('cloud-cover.html');
   });
   app.get('/ndvi-score', function (req, res) {
      res.render('ndvi-score.html');
   });
   app.get('/smooth-ndvi-score', function (req, res) {
      res.render('smooth-ndvi-score.html');
   });
   app.get('/predicted-ndvi-score', function (req, res) {
      res.render('predicted-ndvi-score.html');
   });
   app.get('/linechart', function (req, res) {
      res.render('linechart.html');
   });
   app.get('/doughnutchart', function (req, res) {
      res.render('doughnutchart.html');
   });
   app.get('/test-page', function (req, res) {
      res.render('test-page.html');
   });
}