var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  let products=[
    {
      name:"IPHONE 12",
      category:"Mobile",
      description:"This is latest apple phone",
      image:"data:image/jpeg;base64,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"
    },
    {
      name:"oppo reno 6",
      category:"Mobile",
      description:"This is latest oppo phone",
      image:"data:image/jpeg;base64,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"
    },
    {
      name:"one plus 9 pro",
      category:"Mobile",
      description:"This is latest one plus phone",
      image:"data:image/jpeg;base64,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"
    },
    {
      name:"s21 Ultra",
      category:"Mobile",
      description:"This is latest samsung phone",
      image:"https://www.gizmochina.com/wp-content/uploads/2020/11/Samsung-Galaxy-S21-Ultra-5G-500x500.jpg"
    }
  ]
  res.render('index', {products,admin:false });
  
});

module.exports = router;