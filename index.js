const express = require('express');
const app = express();
const fs = require('fs');
const PORT = 8080;

const contestantsFilePath = "./data/contestants.json";
const getContestants = () => {
    return JSON.parse(fs.readFileSync(contestantsFilePath));
}

app.route("/contestants")
    .get((req, res) => {
        let contestants = getContestants();

        if (req.query.order === "age_descending") {
            // url: /contestants?order=age_descending
            // oldest to youngest
            contestants.sort((contestantA, contestantB) => contestantB.age - contestantA.age);
        } else if (req.query.order === "age") {
            // url: /contestants?order=age
            // youngest to oldest
            contestants.sort((contestantA, contestantB) => contestantA.age - contestantB.age);
        }
        
        // allow for filtering by country?
        // url: /contestants?country=USA
        if (req.query.country) {
            contestants = contestants.filter(contestant => contestant.country === req.query.country);
        }

        // send back all contestants
        res.send(contestants);
    })
    .post((_req, res) => {
        res.send("TODO: Add endpoint");
    });


app.route("/contestants/:id")
    .get((req, res) => {
        const requestedId = Number(req.params.id);
        let contestants = getContestants();
        const foundContestant = contestants.find(contestant => contestant.id === requestedId);

        if (!foundContestant) {
            return res.status(404).send("Contestant with id " + requestedId + " not found");
        }
        
        return res.send(foundContestant);
    })
    .put((_req, res) => {
        res.send("PUT contestant by ID");
    })
    .delete((_req, res) => {
        res.send("DELETE contestant by ID");
    })

app.listen(PORT, () => {
    console.log("Server listening on http://localhost:" + PORT);
})