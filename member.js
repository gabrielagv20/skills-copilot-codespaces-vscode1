function skillsMembers() {
var skills = [];
var skill = {};
var skillName = "";
var skillLevel = "";
var skillDescription = "";
var skillImage = "";
var skillImageAlt = "";
var skillImageLink = "";

// Get the skills from the form
for (var i = 1; i <= 10; i++) {
    if (document.getElementById("skillName" + i).value != "") {
        var skillName = document.getElementById("skillName" + i).value;
        var skillLevel = document.getElementById("skillLevel" + i).value;
        var skillDescription = document.getElementById("skillDescription" + i).value;
        var skillImage = document.getElementById("skillImage" + i).value;
        var skillImageAlt = document.getElementById("skillImageAlt" + i).value;
        }
        return skills;
    }
}  