const fs = require('fs');

const contestantsFilePath = "./data/contestants.json";
const getAll = () => {
    return JSON.parse(fs.readFileSync(contestantsFilePath));
}

const getOne = (id) => {
    return getAll().find(contestant => contestant.id === id);
}

module.exports = { getAll, getOne };
