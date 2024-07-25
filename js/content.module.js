import {ui} from "./ui.module.js"

export class Content{
    constructor(){
        
        document.querySelectorAll(".nav-link").forEach((link) =>{
            link.addEventListener("click", () =>{

                this.resolveTheError(link)
            })  
        })
        this.ui = new ui();
    }

    async resolveTheError(link) { 

            let items = link.getAttribute("data-content") 

            let result = await this.getGamesData(items);

            this.ui.displayContent(result)

    }


    async getGamesData(cont){


        const options = {
                    method: 'GET',
                    headers: {
                        'x-rapidapi-key': 'ca82ee85b1msh1dd0f3c2020ce07p155685jsn18b02916fe62',
                        'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
                    }
                };
            


        let api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${cont}`,options);
        let response = await api.json();
                console.log(response);
        return response;
    }
    
}