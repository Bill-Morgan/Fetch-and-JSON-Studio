window.addEventListener('load', () => {    
    fetch('https://handlers.education.launchcode.org/static/astronauts.json').then( (response) => {
        response.json().then( (json) => {
            let astronautData = document.getElementById('container');
            astronautData.innerHTML = '';
            json = json.sort((a, b) => b.hoursInSpace - a.hoursInSpace)
            for (each in json) {
                astronautData.innerHTML += `
                <div class="astronaut">
                    <div class="bio">
                        <h3>${json[each].firstName} ${json[each].lastName}</h3>
                        <ul>
                            <li>Hours in space: ${json[each].hoursInSpace}</li>
                            <li> Active: ${(json[each].active ? 'true' : '<span  class="red">false</span>')}</li>
                            <li>Skills: ${json[each].skills}</li>
                        </ul>                        
                    </div>
                    <img class="avatar" src="images/${json[each].picture}">
                </div>`;
            }
        })
    })

})