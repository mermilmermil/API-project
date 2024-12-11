const API_KEY = "b9fZAQeTWpEHa8qH6Vs4Je0uRwx7uGeawKM5ik5M"
const cardDiv = document.getElementById("main-page-card")
const searchForm = document.getElementById("date-search")
const today = new Date();
const todayYear = today.getFullYear();
const todayMonth = String(today.getMonth() + 1).padStart(2, '0'); // Ensures 2-digit format
const todayDay = String(today.getDate()).padStart(2, '0'); // Ensures 2-digit format


const formattedDate = `${todayYear}-${todayMonth}-${todayDay}`;

document.addEventListener("DOMContentLoaded", () => {
  getNewRequest(formattedDate)
})

function getNewRequest(day) {
  fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${day}`)
  .then(response => response.json())
  .then(data=> {changeCard(data)})
  .catch(err => console.error("Error fetching data :(", err))
  
  
}

function changeCard(data) {
  cardDiv.innerHTML = `<div class="card-body" >
      <h5 class="card-title">${data.date}</h5>
      <b class="card-text">${data.title}</b>
      <p class="card-text">${data.explanation.split("   ")[0]}</p>
    </div>
    <img src="${data.url}" class="card-img-bottom" alt="picture of the day">`
}

searchForm.addEventListener("submit", (e)=>{
  e.preventDefault()
  const searchInput = document.getElementById("searchInput")
  getNewRequest(searchInput.value)
})
