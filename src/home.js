import dogImage from './images/dog.png';
import textImage from './images/text-img.png';

function createHomePage () {
    const content = document.getElementById('content');
    content.textContent = '';

    const headline = document.createElement('div');
    headline.classList.add('headline');

    const title = document.createElement('div');
    title.classList.add('title');

    const logo = document.createElement('img');
    logo.src = dogImage;
    logo.id = 'header-img';

    const text = document.createElement('span');
    text.id = 'header-text';
    text.textContent = 'Doggy Bakery';

    title.appendChild(logo);
    title.appendChild(text);
    headline.appendChild(title);
    content.appendChild(headline);

    const descBox = document.createElement('div');
    descBox.classList.add('desc-box');

    const descText = document.createElement('div');
    descText.classList.add('text');
    descText.textContent = 'Welcome to Doggy Bakery! Doggy Bakery is a plce to enjoy savory bakery items while petting the cutest dogs. We sell delcious bakeries such cakes, donuts, and croissants. Look at our menu to find some delicious bakeries!';

    descBox.appendChild(descText);
    content.appendChild(descBox);

    const imgWrapper = document.createElement('div');
    imgWrapper.classList.add('img');

    const descImg = document.createElement('img');
    descImg.src = textImage;
    descImg.id = 'desc-img';

    imgWrapper.appendChild(descImg);
    content.appendChild(imgWrapper);

    const hours = document.createElement('div');
    hours.classList.add('hours');

    const hoursHeading = document.createElement('h3');
    hoursHeading.classList.add('hours-heading');
    hoursHeading.textContent = 'Hours';

    const days = document.createElement('div');
    days.classList.add('days');

    const weekdays = document.createElement('p');
    weekdays.classList.add('weekdays');
    weekdays.textContent = 'Monday-Friday: 10am - 10pm';

    const weekends = document.createElement('p');
    weekends.classList.add('weekends');
    weekends.textContent = 'Saturday-Sunday: 10am - 8pm';

    hours.appendChild(hoursHeading);
    days.appendChild(weekdays);
    days.appendChild(weekends);
    hours.appendChild(days);
    content.appendChild(hours);

    const location = document.createElement('div');
    location.classList.add('location');

    const locationHeading = document.createElement('h3');
    locationHeading.classList.add('location-heading');
    locationHeading.textContent = 'Location';

    const address = document.createElement('p');
    address.classList.add('location-text')
    address.textContent = '1539 N. Calvert, Baltimore, Maryland';

    location.appendChild(locationHeading);
    location.appendChild(address);
    content.appendChild(location);
}

export default createHomePage;