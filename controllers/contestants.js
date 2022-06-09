const contestantsModel = require('../models/contestants');

const getContestants = (_req, res) => {
    let contestants = contestantsModel.getAll();

    res.render('contestants', { contestants: contestants, title: "Contestants" }); 
};

const getContestant = (req, res) => {    
    const requestedId = Number(req.params.id);
    let foundContestant = contestantsModel.getOne(requestedId);

    if (!foundContestant) {
        return res.render('404', { error: `Contestant does not exist (id: ${requestedId})`});
    }
    
    res.render('contestant', { contestant: foundContestant} );
}

module.exports = { getContestants, getContestant }