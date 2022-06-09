const loadData = (searchText) => {
    fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
        .then(r => r.json())
        .then(d => displayPhone(d))
}

const displayPhone = (phoneData) => {
    const phoneContainer = document.getElementById('phone-div')
    phoneData.data.slice(0, 20).map(phoneInfo => {
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
    // const seeMore = document.createElement('div')
    // seeMore.innerHTML = `
    //     <button class= 'see-more'>See more</button>
    //     `
    // phoneContainer.appendChild(seeMore)

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
        <h3> <span>Brand:</span> ${detailsData.data.brand} </h3>
        <h3> <span>Model:</span> ${detailsData.data.name} </h3>
        <h3> <span>Release Date:</span> ${detailsData.data.releaseDate} </h3>
    
        <div class= 'extra-info-div'>
            <div class= 'main-features-div'>
                <h3 class='main-features'>Main Features</h3>
                <h3> <span>Chipset:</span> ${detailsData.data.mainFeatures.chipSet} </h3>
                <h3> <span>Display-Size:</span> ${detailsData.data.mainFeatures.displaySize} </h3>
                <h3> <span>Memory:</span> ${detailsData.data.mainFeatures.memory} </h3>
                <h3> <span>Sensors:</span> ${detailsData.data.mainFeatures.sensors} </h3>
                <h3> <span>Storage:</span> ${detailsData.data.mainFeatures.storage} </h3>
            </div>
    
            <div class= 'others-div'>
                <h3 class= 'others'> Others </h3>
                <h3> <span>Bluetooth:</span> ${detailsData.data.others?.Bluetooth ? detailsData.data.others.Bluetooth : 'No'} </h3>
                <h3> <span>GPS:</span> ${detailsData.data.others?.GPS ? detailsData.data.others.GPS : 'No'} </h3>
                <h3> <span>NFC:</span> ${detailsData.data.others?.NFC ? detailsData.data.others.NFC : 'No'} </h3>
                <h3> <span>Radio:</span> ${detailsData.data.others?.Radio ? detailsData.data.others.Radio : 'No'} </h3>
                <h3> <span>USB:</span> ${detailsData.data.others?.USB ? detailsData.data.others.USB : 'No'} </h3>
                <h3> <span>WLAN:</span> ${detailsData.data.others?.WLAN ? detailsData.data.others.WLAN : 'No'} </h3>
            </div>
        </div>
    </div>
    `
}

document.getElementById('search').addEventListener('click', () => {
    document.getElementById('phone-div').textContent = '';
    document.getElementById('details-div').textContent = '';

    const input = document.getElementById('phone-input').value
    loadData(input)
})
