let recepies = [
    {
        img: "https://img.spoonacular.com/recipes/640676-556x370.jpg",
        rname: "Creamy Polenta with Egg, Arrabiata & Bacon",
        indegrients: "8 slices of thick cut bacon, 2 oz. cream cheese, 4 eggs, fresh parsley for garnish, 4 oz. goat cheese, 1 tablespoon olive oil, 1 cup polenta, salt & black pepper",
        path: "https://www.foodista.com/recipe/WPBY4PQQ/creamy-polenta-with-egg-arrabiata-bacon",
    },
    {
        img: "https://img.spoonacular.com/recipes/634320-556x370.jpg",
        rname: "Barbecued Pulled Beef Sandwiches",
        indegrients: "6 strips bacon, 2 pounds beef chuck, 2 tablespoons olive oil, 1/2 cup brown sugar, salt and pepper, 1 onion, chopped, 2 cups to 3 of barbecue sauce, Hamburger buns or Hawaiian rolls",
        path: "https://www.foodista.com/recipe/6PZJ82YX/barbecued-pulled-beef-sandwiches",
    },
    {
        img: "https://img.spoonacular.com/recipes/639413-556x370.jpg",
        rname: "Cilantro Lime Fish Tacos",
        indegrients: " 2 packets Swanson® Flavor Concentrated Seafood Broth, 8 flour tortillas (6-inch), crisp taco shells or fresh corn tortillas, warmed, 1 tablespoon chopped fresh cilantro leaves, 1 cup shredded lettuce or cabbage, 2 tablespoons lime juice, olive oil, 2 tablespoons diced red onions, 1/4 cup Pace® Chunky Salsa, 1/4 cup sour cream, 1 pound fresh or thawed frozen cod or tilapia fillets",
        path: "https://www.foodista.com/recipe/Z7RHNQ7Z/cilantro-lime-fish-tacos",
    },
    {
        img: "https://img.spoonacular.com/recipes/632862-556x370.jpg",
        rname: "Asian Pear and Gorgonzola Salad With Pomegranate Vinaigrette",
        indegrients: "  8 cups Mixed Greens (ie. Arugula, Baby Spinach, Mâche, etc.), 2 Small Asian Pears, sliced paper thin, cup Fresh Pomegranate Seeds, 1/2 cup Gorgonzola, crumbled, cup Pistachio Nuts, roughly chopped, 2 tablespoons Fresh Pomegranate Seeds, 3 tablespoons Red Wine Vinegar, 1/2 teaspoon Sugar, 2 Shallots, thinly sliced, 1/2 cup Extra Virgin Olive Oil, Kosher Salt and Fresh Cracked Pepper to taste",
        path: "https://www.foodista.com/recipe/Z4G2VRTD/asian-pear-and-gorgonzola-salad-with-pomegranate-vinaigrette",
    },
];

let recepieContainer = document.querySelector('.recepie-container');
recepies.forEach((recepie) => {
    let div = document.createElement('div');
    div.classList.add('recipe-item');
    let img = document.createElement('img');
    img.src = recepie.img;
    let h2 = document.createElement('h2');
    h2.innerText = recepie.rname;
    let p = document.createElement('p');
    p.innerHTML = `<span>Indegrients :</span> ${recepie.indegrients}`;
    let button = document.createElement('button');
    button.innerText = "view Recipe";
    div.append(img, h2, p, button);
    recepieContainer.append(div);
    button.addEventListener('click', () => {
        window.location.href = `${recepie.path}`
    })
})




