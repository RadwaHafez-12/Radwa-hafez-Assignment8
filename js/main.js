var meals = [
// ------- MEAL 1 -------
    {
        name: "BBQ Pulled Pork",
        desc: "Slow-cooked tender pork in smoky barbecue sauce",
        difficulty: "Easy",
        region: "American",
        rating: 4.7,
        reviews: 420,
        prepTime: 20,
        cookTime: 30,
        servings: 4,
        isExtended: true,
        ingredients: [
            "3 large eggplants, sliced",
            "500g ground lamb",
            "400g canned tomatoes",
            "1 onion, diced",
            "3 cloves garlic, minced",
            "500ml béchamel sauce",
            "100g parmesan cheese"
        ],
        instructions: [
            "Slice eggplants, salt them, and let sit for 30 minutes. Rinse and pat dry.",
            "Brush eggplant slices with olive oil, grill or bake until softened.",
            "Cook ground lamb with onion and garlic. Add tomatoes, cinnamon, oregano. Simmer 20 minutes.",
            "Preheat oven to 180°C (350°F).",
            "Bake for 45 minutes until golden. Let rest 15 minutes before serving."
        ],
        chefsTips: [
            "Salt eggplant to remove bitterness",
            "Don't skip the resting time - it helps set the layers",
            "Use ground beef if lamb is unavailable",
            "Make ahead and reheat for easier serving"
        ],
        nutrition: {
            calories: 580,
            protein: 36,
            carbohydrates: 32,
            fat: 42,
            fiber: 8,
            sodium: 820
        },
        imgSource: "photos/BBQ Pulled Pork.jpg"
        
    },

    // ------- MEAL 2 -------
    {
        name: "Chicken Alfredo Pasta",
        desc: "Creamy Alfredo sauce tossed with grilled chicken and fettuccine",
        difficulty: "Medium",
        region: "Italian-American",
        rating: 4.6,
        reviews: 310,
        prepTime: 15,
        cookTime: 25,
        servings: 4,
        isExtended: true,
        ingredients: [
            "400g fettuccine pasta",
            "2 chicken breasts, sliced",
            "3 cloves garlic, minced",
            "300ml heavy cream",
            "100g parmesan cheese",
            "2 tbsp butter",
            "Salt and pepper to taste"
        ],
        instructions: [
            "Cook pasta according to package instructions.",
            "Sauté chicken until browned and cooked through.",
            "Add butter and garlic, cook until fragrant.",
            "Pour in cream and simmer until slightly thickened.",
            "Stir in parmesan, then add pasta and toss until coated."
        ],
        chefsTips: [
            "Reserve some pasta water to adjust sauce consistency",
            "Use freshly grated parmesan for best flavor",
            "Don't overcook the chicken"
        ],
        nutrition: {
            calories: 690,
            protein: 45,
            carbohydrates: 58,
            fat: 32,
            fiber: 3,
            sodium: 760
        },
        imgSource: "photos/chicken-alfredo-pasta-1-vertical.webp"
    },

    // ------- MEAL 3 -------
    {
        name: "Vegetable Stir-Fry",
        desc: "Crisp veggies tossed in a savory soy-ginger sauce",
        difficulty: "Easy",
        region: "Asian",
        rating: 4.5,
        reviews: 250,
        prepTime: 10,
        cookTime: 15,
        servings: 3,
        isExtended: true,
        ingredients: [
            "1 broccoli head, cut into florets",
            "2 carrots, sliced",
            "1 bell pepper, sliced",
            "150g snap peas",
            "3 tbsp soy sauce",
            "1 tbsp ginger, grated",
            "2 cloves garlic, minced"
        ],
        instructions: [
            "Heat oil in a wok over high heat.",
            "Add vegetables and stir-fry until crisp-tender.",
            "Add soy sauce, ginger, and garlic. Cook 2–3 minutes.",
            "Serve hot with rice or noodles."
        ],
        chefsTips: [
            "Keep the wok very hot for best texture",
            "Cut vegetables uniformly for even cooking",
            "Add chili flakes for a spicy kick"
        ],
        nutrition: {
            calories: 210,
            protein: 8,
            carbohydrates: 32,
            fat: 7,
            fiber: 9,
            sodium: 480
        },
        imgSource: "photos/Vegetable Stir-Fry.jpg"
    },

    // ------- MEAL 4 -------
    {
        name: "Beef Tacos",
        desc: "Seasoned ground beef served in warm tortillas with fresh toppings",
        difficulty: "Easy",
        region: "Mexican",
        rating: 4.8,
        reviews: 510,
        prepTime: 15,
        cookTime: 20,
        servings: 4,
        isExtended: false,
        ingredients: [
            "500g ground beef",
            "1 onion, diced",
            "2 tbsp taco seasoning",
            "12 small tortillas",
            "Shredded lettuce",
            "Diced tomatoes",
            "Shredded cheese"
        ],
        instructions: [
            "Cook ground beef with onion until browned.",
            "Stir in taco seasoning and a splash of water. Simmer 5 minutes.",
            "Warm tortillas in a pan or oven.",
            "Assemble tacos with beef and toppings."
        ],
        chefsTips: [
            "Toast tortillas for extra flavor",
            "Add lime juice to brighten the taste",
            "Use ground turkey for a lighter option"
        ],
        nutrition: {
            calories: 520,
            protein: 32,
            carbohydrates: 40,
            fat: 26,
            fiber: 5,
            sodium: 710
        },
        imgSource: "photos/Beef Tacos.jpg"
    },

    // ------- MEAL 5 -------
    {
        name: "Butter Chicken",
        desc: "Rich and creamy Indian curry made with tender chicken and aromatic spices",
        difficulty: "Medium",
        region: "Indian",
        rating: 4.9,
        reviews: 610,
        prepTime: 20,
        cookTime: 35,
        servings: 4,
        isExtended: false,
        ingredients: [
            "500g chicken thighs, cubed",
            "1 cup tomato purée",
            "1 cup heavy cream",
            "2 tbsp butter",
            "1 tbsp garam masala",
            "1 tbsp ginger-garlic paste",
            "Salt to taste"
        ],
        instructions: [
            "Sear chicken in butter until lightly browned.",
            "Add tomato purée and spices. Simmer 15 minutes.",
            "Pour in cream and cook until thick and creamy.",
            "Serve with rice or naan."
        ],
        chefsTips: [
            "Marinate the chicken overnight for deeper flavor",
            "Use ghee for a richer taste",
            "Simmer slowly for a smoother sauce"
        ],
        nutrition: {
            calories: 640,
            protein: 38,
            carbohydrates: 22,
            fat: 46,
            fiber: 2,
            sodium: 690
        },
        imgSource: "photos/Butter Chicken.jpg"
    }
];



var lastIndex = -1;
function generateRandomMealIndex() {
    var randomIndex = Math.floor(Math.random() * meals.length); 
    while (randomIndex === lastIndex) {
        randomIndex = Math.floor(Math.random() * meals.length); 
    }
    lastIndex = randomIndex; 
    displayMeal(randomIndex);
}
function displayMeal(index) {
    var meal = meals[index]; 
    console.log(meal);
    for (var propertyName in meal) { 
        if (propertyName === 'imgSource') {
            document.getElementById(propertyName).setAttribute("src", meal[propertyName]);
        }
        else if (propertyName === 'ingredients' || propertyName === 'instructions' || propertyName === 'chefsTips') {
            var cartona = '';
            for (var i = 0; i < meal[propertyName].length; i++) {
                cartona += `<li>${i + 1} - ${meal[propertyName][i]}</li>`;
            }
            document.getElementById(propertyName).innerHTML = cartona;
        }
        else if (propertyName === 'isExtended') {
            if (meal[propertyName] == true) {
                document.getElementById(propertyName).classList.add("d-block");
                document.getElementById(propertyName).classList.remove("d-none");
            }
            else {
                document.getElementById(propertyName).classList.add("d-none");
                document.getElementById(propertyName).classList.remove("d-block");
            }
        }
        else if (propertyName === 'nutrition') {
            for (var nutritionName in meal[propertyName]) {
                var nutritionObject = meal[propertyName];
                console.log(nutritionName);
                document.getElementById(nutritionName).innerHTML = nutritionObject[nutritionName];
            }
        }
        else {
            document.getElementById(propertyName).innerHTML = meal[propertyName];
        }
    }

}