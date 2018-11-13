var express = require('express');
    var router = express.Router();

    var app = express();


    /* GET home page. */
    app.get('/gallery', function(req, res, next) {
        res.render('gallery');
        
        });
   
  
    // router.post('/setSurvey', function(req, res, next) {
    //     console.log(req.body);
    //     var survey = req.body;
    
    
    //     if(survey.answer == "")
    //     {
    //          db.ref('survey/').child(survey.userid).child(survey.cid).child(survey.csid).child(survey.qid).remove();
    //     }
    //     else
    //     {
    //          db.ref('survey/').child(survey.userid).child(survey.cid).child(survey.csid).child(survey.qid).child("answerType").set(survey.answerType);
    //          db.ref('survey/').child(survey.userid).child(survey.cid).child(survey.csid).child(survey.qid).child("answer").set(survey.answer);
    //     }
    
    //     res.end('{"success" : "Updated Successfully", "status" : 200}');
    
    // });

    module.exports = router;

// };
