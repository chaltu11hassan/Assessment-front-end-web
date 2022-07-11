
console.log('My neighborhood')


const restaurantRecBtn = document.querySelector('#restaurant')


let restaurants = ["Nong's Thai", "Valley Pastries", "Jin's Chow Mein", "Jet's Pizza", "Sarpino's Pizza", "Sakana Sushi"];



function recommendRestaurant(){
    const random = restaurants[Math.floor(Math.random() * restaurants.length)];
    for(let i=o; i<restaurants.length; i++){
        console.log(random, restaurants[random]);
    }  
}

restaurantRecBtn.addEventListener('click', recommendRestaurant);
