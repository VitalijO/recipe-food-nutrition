import axios from "axios"

export default class Dishes{
    constructor() {
        this.searchQuery = ''
      this.page = 0 
    } 
    get querry() {
      return this.searchQuery
  } 

  incrementPage() {
    this.page+=1
  }
  resetPage() {
    this.page=0
  }
    set querry(newSearchQuery) {
    this.searchQuery = newSearchQuery
  }
  
  findDish() {
    return axios.get('https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch', {
  params: {
    query: `${this.searchQuery}` ,
    offset: `${this.page}`,
    number: '10',
      },
    
    headers: {
    'X-RapidAPI-Key': 'f7b7df0736mshb28689988ec5190p10e3cajsn700aecbb3daa',
    'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
    }
    
 
}
    ).catch(function (error) {
    if (error.response) {
      // Запит було зроблено, і сервер відповів кодом стану, який 
      // виходить за межі 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // Запит було зроблено, але відповіді не отримано 
      // `error.request` - це екземпляр XMLHttpRequest у браузері та екземпляр 
      // http.ClientRequest у node.js
      console.log(error.request);
    } else {
      // Щось сталося під час налаштування запиту, що викликало помилку
      console.log('Error', error.message);
    }
    console.log(error.config);
  });
    
  }   
 }
