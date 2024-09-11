var _a;
//Elements listing
(_a = document.getElementById('resumeform')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    var imageelement = document.getElementById('image');
    var nameelement = document.getElementById('name');
    var emailelement = document.getElementById('email');
    var phoneelement = document.getElementById('phone');
    var qualificationelement = document.getElementById('qualification');
    var experienceelement = document.getElementById('experience');
    var skillelement = document.getElementById('skills');
    if (imageelement && nameelement && emailelement && phoneelement && qualificationelement && experienceelement && skillelement) {
        var name_1 = nameelement.value;
        var email = emailelement.value;
        var phone = phoneelement.value;
        var qualification = qualificationelement.value;
        var experience = experienceelement.value;
        var skill = skillelement.value;
        //ProfilePicture
        var profilePicturefile = (_a = imageelement.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePicturefile ? URL.createObjectURL(profilePicturefile) : "";
        var resumeoutput = "\n\n            <h2>Resume</h2>\n            ".concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, "\" class=\"image\">") : "", "\n            <p><strong>Name: </strong>").concat(name_1, "</p>\n            <p><strong>Email: </strong>").concat(email, "</p>\n            <p><strong>Contact: </strong>").concat(phone, "</p>\n            <h3>Educational Details</h3>\n            <p>").concat(qualification, "</p>\n            <h3>Experience</h3>\n            <p>").concat(experience, "</p>\n            <h3>Skills Details</h3>\n            <p>").concat(skill, "</p>\n        ");
        var resumeoutputelement = document.getElementById('resumeoutput');
        if (resumeoutputelement) {
            resumeoutputelement.innerHTML = resumeoutput;
        }
        else {
            console.error('Resume is empty');
        }
    }
    else {
        console.error('one or more element is missing');
    }
});
