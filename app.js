const url = "https://skogfghrpsiaibzbjgne.supabase.co/rest/v1/codex-academy";
const leadsurl = "https://skogfghrpsiaibzbjgne.supabase.co/rest/v1/leads";
const apiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2dmZ2hycHNpYWliemJqZ25lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ3OTk1MDEsImV4cCI6MjA4MDM3NTUwMX0.Oli4Picy3nPZlxj0KUycXEyI2fu4AXiYJoKzg9TUh0Q";

async function fetchCourses() {
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'apikey': apiKey,
            }
        });
        const data = await response.json();
        console.log(data);
        displayCourses(data);
    } catch (error) {
        console.error('Error fetching courses:', error);
    }
}

fetchCourses();
const courseCard = document.getElementById('courses-container');
function displayCourses(courses) {
    courses.forEach(course => {
        
        courseCard.innerHTML += `
        <div col class="col-md-4 mb-4">
            <img src=${course.img_url} class="card-img-top" alt="${course.service}">
            <div class="card-body">
                <h5 class="card-title">${course.service}</h5> 
        <div class="card-border-4" style="width: 18rem; margin-top:20px;">
                <p class="card-text">${course.Description}</p>
        </div>
        </div>`;
        
        
    });
}
