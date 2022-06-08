const loadData = (searchText) => {
    fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
        .then(r => r.json())
        .then(d => displayPhone(d))
}

const displayPhone = (phoneData) => {
    const phoneContainer = document.getElementById('phone-div')
    phoneData.data.map(phoneInfo => {
        const phoneDiv = document.createElement('div')
        phoneDiv.innerHTML = `
        <div class= 'phones'>
        <img src= ${phoneInfo.image}> 
        <h3> Brand: ${phoneInfo.brand} </h3>
        <h3> Model: ${phoneInfo.phone_name} </h3>
        <button onclick="details('${phoneInfo.slug}')"> Details </button>
        </div>
        `
        phoneContainer.appendChild(phoneDiv)
    })
}

const details = (id) => {
    console.log(id);
    fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
        .then(r => r.json())
        .then(d => displayDetails(d))
}

const displayDetails = (detailsData) => {
    const detailsDiv = document.getElementById('details-div')
    detailsDiv.innerHTML = `
    <div class= 'detailed-phones'>
    <img src= ${detailsData.data.image}> 
    <h3> Brand: ${detailsData.data.brand} </h3>
    <h3> Model: ${detailsData.data.name} </h3>
    <h3> Release Date: ${detailsData.data.releaseDate} </h3>
    <h3>Main Features</h3>
    <h3> Chipset: ${detailsData.data.mainFeatures.chipSet} </h3>
    <h3> Display-Size: ${detailsData.data.mainFeatures.displaySize} </h3>
    <h3> Memory: ${detailsData.data.mainFeatures.memory} </h3>
    <h3> Sensors: ${detailsData.data.mainFeatures.sensors} </h3>
    <h3> Storage: ${detailsData.data.mainFeatures.storage} </h3>
    </div>
    `
    console.log(detailsData);

}

document.getElementById('search').addEventListener('click', () => {
    const input = document.getElementById('phone-input').value
    loadData(input)
})
