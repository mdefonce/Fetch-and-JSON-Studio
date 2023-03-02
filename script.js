// TODO: add code here
window.addEventListener("load", function() {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        response.json().then( function(json) {
        //   console.log(json);

        let sortedAstronauts = json.sort(function(a, b) {return a.hoursInSpace - b.hoursInSpace});

          const container = document.getElementById("container");
          container.innerHTML += `<h2>Total number of Astronauts: ${sortedAstronauts.length}</h2>`;

          for(let i=0; i<json.length; i++) {
            let detailsHTML = `
                <div class="astronaut">
                    <div class="bio">
                        <h3>${json[i].firstName} ${json[i].lastName}</h3>
                        <ul>
                            <li>Hours in space: ${json[i].hoursInSpace}</li>
                            <li ${json[i].active ? 'style="color:green"' : ''}>Active: ${json[i].active}</li>
                            <li>Skills: ${json[i].skills.join(", ")}</li>
                        </ul>
                    </div>
                        <img class="avatar" src="${json[i].picture}">
                </div>
            `;
            container.innerHTML += detailsHTML;
          }

        });
    });

});