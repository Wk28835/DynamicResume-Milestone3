//Elements listing
document.getElementById('resumeform')?.addEventListener('submit',function(event){
    event.preventDefault();

    const imageelement = document.getElementById('image') as HTMLInputElement;

    const nameelement = document.getElementById('name') as HTMLInputElement;
    const emailelement=document.getElementById('email') as HTMLInputElement;
    const phoneelement=document.getElementById('phone') as HTMLInputElement;
    const qualificationelement=document.getElementById('qualification') as HTMLInputElement;
    const experienceelement=document.getElementById('experience') as HTMLInputElement;
    const skillelement=document.getElementById('skills') as HTMLInputElement;

    if(imageelement && nameelement &&  emailelement && phoneelement && qualificationelement && experienceelement && skillelement){

        const name= nameelement.value;
        const email= emailelement.value;
        const phone= phoneelement.value;
        const qualification= qualificationelement.value;
        const experience= experienceelement.value;
        const skill= skillelement.value;

        //ProfilePicture
        const profilePicturefile= imageelement.files?.[0]
        const profilePictureURL=profilePicturefile?URL.createObjectURL(profilePicturefile):"";

        const resumeoutput=`

            <h2>Resume</h2>
            ${profilePictureURL ?`<img src="${profilePictureURL}" class="image">`:""}
            <p><strong>Name: </strong>${name}</p>
            <p><strong>Email: </strong>${email}</p>
            <p><strong>Contact: </strong>${phone}</p>
            <h3>Educational Details</h3>
            <p>${qualification}</p>
            <h3>Experience</h3>
            <p>${experience}</p>
            <h3>Skills Details</h3>
            <p>${skill}</p>
        `;

        const resumeoutputelement= document.getElementById('resumeoutput');
        if(resumeoutputelement){
            resumeoutputelement.innerHTML=resumeoutput;
        }
        else{
            console.error('Resume is empty');
        }

    }
    else{
        console.error('one or more element is missing');
    }
     
})


