
export class ui{
    constructor (){}

    displayContent(game){

        let showContent =``
        
        for (let i = 0; i < game.length; i++) {
            
        showContent += `
        <div class="col-md-3">
                <div class="game-card rounded-2">
                    <img src="${game[i].thumbnail}" class="w-100" alt="">

                    <div class="details text-white d-flex justify-content-between align-items-center mt-3">
                        <h3>${game[i].title}</h3>
                        <button class="btn btn-info text-white">Free</button>
                    </div>
                    <p class="description text-white w-100 text-center mt-2">${game[i].short_description}</p>
                    
                    <div class="requirement d-flex justify-content-between align-items-center">
                        <h3 class="mt-2 rounded-5 fw-bold mb-0">${game[i].genre}</h3>
                        <P class="mt-2 rounded-5 fw-bold mb-0">${game[i].platform.split(" ").slice(0,8).join(" ")}</P>
                    </div>
                </div>

                

            </div>

        ` 
            
        }
        document.getElementById("myData").innerHTML = showContent

                    
    }
}