const { v4: uuid } = require("uuid");
const Record = require("../database/Record");

const getRecordForWorkout = (workoutId) => {
    console.log(workoutId)
    try {
        return Record.getRecordForWorkout(workoutId);
    } catch (error) {

        throw error;
    }
};
module.exports = { getRecordForWorkout };

