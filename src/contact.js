import dogImage from './images/dog.png';

function createContact () {
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
    text.textContent = 'Contact';
        
    title.appendChild(logo);
    title.appendChild(text);
    headline.appendChild(title);
    content.appendChild(headline);

    const img1 = document.createElement('div');
    img1.classList.add('img');
    img1.innerHTML = `
    <svg width="150px" height="150px" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M74 211.658C99.0457 142.251 155.836 87.1314 226.717 108.765C276.177 123.861 255.428 151.992 274.648 170.486C285.492 178.829 314.933 167.631 322.548 178.047C329.28 187.259 324.416 204.065 322.548 215.097C315.179 258.597 265.313 265 223.065 265" stroke="#000000" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M325 194C321.518 187.392 313.572 181.214 304 176" stroke="#000000" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M132.242 181.22C129.728 194.908 90.9731 288.143 131.095 296.086C205.608 306.73 196.665 221.971 196.665 169" stroke="#000000" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M234 168V173" stroke="#000000" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    `;

    content.appendChild(img1);

    const info1 = document.createElement('div');
    info1.classList.add('info');

    const infoName1 = document.createElement('h3');
    infoName1.classList.add('info-name');
    infoName1.textContent = 'Charlie';

    const infoRole1 = document.createElement('p');
    infoRole1.classList.add('role');
    infoRole1.textContent = 'Manager';

    const infoNumber1 = document.createElement('p');
    infoNumber1.classList.add('number');
    infoNumber1.textContent = '123-456-1234';

    const infoEmail1 = document.createElement('p');
    infoEmail1.classList.add('email');
    infoEmail1.textContent = 'ilovedogs123@doggy.com';

    info1.appendChild(infoName1);
    info1.appendChild(infoRole1);
    info1.appendChild(infoNumber1);
    info1.appendChild(infoEmail1);
    content.appendChild(info1);

    const img2 = document.createElement('div');
    img2.classList.add('img');
    img2.innerHTML = `
    <svg width="150px" height="150px" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M74 211.658C99.0457 142.251 155.836 87.1314 226.717 108.765C276.177 123.861 255.428 151.992 274.648 170.486C285.492 178.829 314.933 167.631 322.548 178.047C329.28 187.259 324.416 204.065 322.548 215.097C315.179 258.597 265.313 265 223.065 265" stroke="#000000" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M325 194C321.518 187.392 313.572 181.214 304 176" stroke="#000000" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M132.242 181.22C129.728 194.908 90.9731 288.143 131.095 296.086C205.608 306.73 196.665 221.971 196.665 169" stroke="#000000" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M234 168V173" stroke="#000000" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    `;

    content.appendChild(img2);

    const info2 = document.createElement('div');
    info2.classList.add('info');

    const infoName2 = document.createElement('h3');
    infoName2.classList.add('info-name');
    infoName2.textContent = 'Max';

    const infoRole2 = document.createElement('p');
    infoRole2.classList.add('role');
    infoRole2.textContent = 'Chef';

    const infoNumber2 = document.createElement('p');
    infoNumber2.classList.add('number');
    infoNumber2.textContent = '123-456-2222';

    const infoEmail2 = document.createElement('p');
    infoEmail2.classList.add('email');
    infoEmail2.textContent = 'breadislife@doggy.com';

    info2.appendChild(infoName2);
    info2.appendChild(infoRole2);
    info2.appendChild(infoNumber2);
    info2.appendChild(infoEmail2);
    content.appendChild(info2);

    const img3 = document.createElement('div');
    img3.classList.add('img');
    img3.innerHTML = `
    <svg width="150px" height="150px" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M74 211.658C99.0457 142.251 155.836 87.1314 226.717 108.765C276.177 123.861 255.428 151.992 274.648 170.486C285.492 178.829 314.933 167.631 322.548 178.047C329.28 187.259 324.416 204.065 322.548 215.097C315.179 258.597 265.313 265 223.065 265" stroke="#000000" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M325 194C321.518 187.392 313.572 181.214 304 176" stroke="#000000" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M132.242 181.22C129.728 194.908 90.9731 288.143 131.095 296.086C205.608 306.73 196.665 221.971 196.665 169" stroke="#000000" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M234 168V173" stroke="#000000" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    `;

    content.appendChild(img3);

    const info3 = document.createElement('div');
    info3.classList.add('info');

    const infoName3 = document.createElement('h3');
    infoName3.classList.add('info-name');
    infoName3.textContent = 'Buddy';

    const infoRole3 = document.createElement('p');
    infoRole3.classList.add('role');
    infoRole3.textContent = 'Waiter';

    const infoNumber3 = document.createElement('p');
    infoNumber3.classList.add('number');
    infoNumber3.textContent = '123-456-3333';

    const infoEmail3 = document.createElement('p');
    infoEmail3.classList.add('email');
    infoEmail3.textContent = 'givemeatreat@doggy.com';

    info3.appendChild(infoName3);
    info3.appendChild(infoRole3);
    info3.appendChild(infoNumber3);
    info3.appendChild(infoEmail3);
    content.appendChild(info3);
}

export default createContact