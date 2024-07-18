document.addEventListener('DOMContentLoaded', () => {
    const reservationForm = document.getElementById('reservation-form');
    const resultsContainer = document.getElementById('results');

    reservationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Mock search results
        const searchResults = [
            {
                busName: 'Express Line',
                departure: '10:00 AM',
                arrival: '2:00 PM',
                price: '$20'
            },
            {
                busName: 'City Connect',
                departure: '12:00 PM',
                arrival: '4:00 PM',
                price: '$18'
            },
            {
                busName: 'Interstate Express',
                departure: '2:00 PM',
                arrival: '6:00 PM',
                price: '$22'
            }
        ];
        
        displayResults(searchResults);
    });

    function displayResults(results) {
        resultsContainer.innerHTML = ''; // Clear previous results

        results.forEach(result => {
            const resultItem = document.createElement('div');
            resultItem.className = 'result-item';

            const busName = document.createElement('h5');
            busName.textContent = result.busName;

            const departure = document.createElement('p');
            departure.textContent = `Departure: ${result.departure}`;

            const arrival = document.createElement('p');
            arrival.textContent = `Arrival: ${result.arrival}`;

            const price = document.createElement('p');
            price.textContent = `Price: ${result.price}`;

            resultItem.appendChild(busName);
            resultItem.appendChild(departure);
            resultItem.appendChild(arrival);
            resultItem.appendChild(price);

            resultsContainer.appendChild(resultItem);
        });
    }
});
