//displaycategories//

fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    .then(res => res.json())
    .then(data => {
        displayCatagory(data)

    })

displayCatagory = catagory => {
    const foodCatagories = catagory.categories;

    foodCatagories.forEach(food => {



        const foodDiv = document.getElementById('food');

        const createFoodDiv = document.createElement('div');

        createFoodDiv.className = 'foods';

        const foodInfo = `
        <img src=${food.strCategoryThumb}>
        <p>${food.strCategory}</p>
        
        `
        createFoodDiv.innerHTML = foodInfo;
        foodDiv.appendChild(createFoodDiv)
        createFoodDiv.addEventListener('click', function (event) {
            const search = document.getElementById('search');
            const foodContainer = document.getElementById('foodContainer');
            search.style.display = 'none';
            foodContainer.style.display = 'none';
            categoryDetails(food.strCategory)
        })


    });
}

//displaycategories//


//display same categories meals//

categoryDetails = catagory =>{
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${catagory}`

    fetch(url)
    .then(res=>res.json())
    .then(data=>{
        displaySameCategoriesMeals(data)
    })
}


displaySameCategoriesMeals = catagoryMeals => {
    const mealsCatagories = catagoryMeals.meals;

    mealsCatagories.forEach( meal => {


        const mealDiv = document.getElementById('meals');

        const createMealDiv = document.createElement('div');

        createMealDiv.className = 'meals';

        const mealInfo = `
        <img src=${meal.strMealThumb}>
        <p>${meal.strMeal}</p>
        
        `
        createMealDiv.innerHTML = mealInfo;
        mealDiv.appendChild(createMealDiv)

        createMealDiv.addEventListener('click', function (event) {
            const search = document.getElementById('search');
            const foodContainer = document.getElementById('foodContainer');
            const mealContainer =document.getElementById('mealContainer')
            search.style.display = 'none';
            foodContainer.style.display = 'none';
            mealContainer.style.display ='none';
            mealDetails(meal.strMeal)
        })

    });
}

//display same categories meals//


//display meal details//

mealDetails = details=>{
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${details}`

    fetch(url)
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        displayMealsdetails(data)
    })
   
}

displayMealsdetails = mealdetails =>{

    const meal = mealdetails.meals[0];

    const mealsDetails =  document.getElementById('mealsDetails')

    mealsDetails.innerHTML=`
    
    <img src="${meal.strMealThumb}" alt="food">
    <p>${meal.strMeal}</p>
    <p>${meal.strArea}</p>
    <ul>
        <li>${meal.strIngredient1}</li>
        <li>${meal.strIngredient2}</li>
        <li>${meal.strIngredient3}</li>
        <li>${meal.strIngredient4}</li>
        <li>${meal.strIngredient5}</li>
        <li>${meal.strIngredient6}</li>
        <li>${meal.strIngredient7}</li>
        <li>${meal.strIngredient8}</li>
        <li>${meal.strIngredient9}</li>
        <li>${meal.strIngredient10}</li>
    </ul>

    
    `

    console.log(meal)


}
//display meal details//




