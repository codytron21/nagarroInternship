const target = document.getElementById("content");
const apikey = "47e9f4a1-2fcc-48a4-b926-1415984d13be";
const url = `https://api.cricapi.com/v1/currentMatches?apikey=${apikey}&offset=0`
window.addEventListener("load", myfunc);
function myfunc() {
    target.innerHTML = `<div class="load-logo"><img src="assets/ball.jpg" /></div>`
    fetch(url)
        .then((res) => res.json())
        .then((apidata) => {
            // target.innerHTML = `<center><h1 bg-info>HELLO FANS! welcome to crick mania</h1></center>`
            target.innerHTML = "";
            const matches = apidata.data;

            matches.map((match) => {
                target.innerHTML +=
                    `<div class="container text-center">
          <div class="card" >
            <div class="card-body">
              <h5 class="card-title bg-danger">${match.name}</h5>
              <h3> <span class="badge bg-secondary">${match.venue}</span></h3>
               <div class="team-logo">
              <img src=${match.teamInfo[0].img} class="rounded float-start"  alt="..." />
              </div>
              <div class="team-logo">
              <img src=${match.teamInfo[1].img} class="rounded float-end"  alt="..." />
              </div>
              <p class="card-text">
                <h3><span class="badge bg-success">${match.status}</span></h3>
              </p>
              
                    <p >${typeof match.score[0] === "undefined"
                        ? ""
                        : match.score[0].inning
                    }</p>
                      <p>${typeof match.score[0] === "undefined"
                        ? ""
                        : match.score[0].r +
                        "/" +
                        match.score[0].w +
                        " (" +
                        match.score[0].o +
                        ")"
                    }</p>
                   
                        <p>${typeof match.score[1] === "undefined"
                        ? ""
                        : match.score[1].inning
                    }
                    </p>
                        <p>${typeof match.score[1] === "undefined"
                        ? ""
                        : match.score[1].r +
                        "/" +
                        match.score[1].w +
                        " (" +
                        match.score[1].o +
                        ")"
                    }</p>
                    
                    </div>`
            })
        })
        .catch((err) => {
            console.log(err);
        });
};