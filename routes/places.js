var express = require('express');
var routeController = require('../controllers/PlacesControllers');
var router = express.Router();

/* GET home page. */
router.route('/')
.get(routeController.index)
.post(routeController.create);


  router.route('/:id')
  .get(routeController.show)
  .put(routeController.update)
  .delete(routeController.destroy);


module.exports = router;
