'use strict'

function addGrades(grades, newGrades) {
	return grades.concat(newGrades.split(','));
}

function clearGrades(grades) {
	return grades.map(grade => Number(grade)).filter(grade => isValidGrade(grade));
}

function firstFailed(grades) {
	return grades.find(grade => grade < 5);
}

function passedGrades(grades) {
	return grades.filter(grade => grade >= 5);
}

function avgGrade(grades) {
	return (grades.reduce((total, grade) => total + grade, 0) / grades.length).toFixed(2);
}

function finalGrades(grades, increment) {
	return grades.map(grade => String(Math.round(grade + grade * increment / 100)));
}

function isValidGrade(grade) {
	if (!grade) {
		return false;
	}
	
	if (isNaN(grade)) {
		return false;
	}

	if (grade < 0 || grade > 10) {
		return false;
	}
	
	return true;
}

module.exports = {
	addGrades,
	clearGrades,
	firstFailed,
	passedGrades,
	avgGrade,
	finalGrades
}