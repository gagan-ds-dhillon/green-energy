    // Load your images on page-load
    function preloader() {
        const imagesPaths = [
           "img/img-1.jpg",
           "img/img-2.jpg",
           "img/img-3.jpg"
        ];
        const images = [];
        for (let i = 0; i < imagesPaths.length; i++) {
            images[i] = new Image();
            images[i].src = imagesPaths[i];
        }

        // Images ready to be used:
        console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
    };    
    window.addEventListener("load", preloader);
    /* 
    Get all buttons in a NODE LIST of buttons (array like structure) */
    
    /* 
    Complete your resource-object that will store the dynamic content.
    Resource object should 3 sub-objects. Give your sub-objects
    meaningful names. Every sub-object should have the following
    properties headingContent, bodyText, imgUrl and imgAlt. */
    const buttons = document.querySelectorAll('button');
    const object = [
        {
            headingContent: "Solar Energy",
            imgUrl: "img/img-1.jpg",
            imgAlt: 'Solar energy image',
            bodyText: "Solar energy is simply the light and heat that come from the sun."
        },
        {
            headingContent: "Hybrid",
            imgUrl: "img/img-2.jpg",
            imgAlt: 'Hybrid image',
            bodyText: "Hybrid electric vehicles are powered by an internal combustion engine and an electric motor, which uses energy stored in batteries."
        },
        {
            headingContent: "Geothermal",
            imgUrl: "img/img-3.jpg",
            imgAlt: 'Geothermal image',
            bodyText: "Geothermal energy is heat derived within the sub-surface of the earth. Water and/or steam carry the geothermal energy to the Earth's surface."
        }
    ];
    /* 
    Get the reference to your HTML-container
    that will be dynamically loaded from the resource-object. */
    /* 
    The first button in a NODE LIST of buttons will initially 
    have the id: active-button - this will uniquely style 
    the active button (CSS rule). 
    
    The first content from the
    resource-object will be loaded on the page load:
    `<h1>${headingContent}</h1>
     <img src="${imgUrl}" alt="${imgAlt}">
     <p>${bodyText}</p>` */
    
    /* 
    Start your handleSelection function here. */ 
    const container = document.querySelector('#container');
    function handleSelection(e){
        
        /* 
        Remove the id active-button from the element that
        contains it prior to the click-event. 

        This will require the loop throught the NODE LIST of buttons. 
        Inside the loop, use conditional and the element object method
        hasAttribute() to check if the current button in the loop containes the id.
        If it does, use element-object property removeAttribute()
        to remove the id. */


        /*
        Use the element-object method setAttribute() to set the id active-button 
        to the currently clicked button. */
        
        for (let btn of buttons){
            if(btn.hasAttribute('id')){
                btn.removeAttribute('id');
            }
        }
        e.target.setAttribute('id', 'active-button');

        /* 
        Use conditional and event-object to check which button is clicked
        and based on that, create HTML with the data inside the backticks:
        `<h1>${headingContent}</h1>
         <img src="${imgUrl}" alt="${imgAlt}">
         <p>${bodyText}</p>`
        Assign this content to to your HTML-container that will 
        be dynamically loaded (you already got the reference to 
        this container before you started the function handleSelection) */ 

        if (e.target.innerText == "Solar Energy"){
            container.innerHTML = `<h1>${object[0].headingContent}</h1>
                <img src="${object[0].imgUrl}" alt="${object[0].imgAlt}">
                <p>${object[0].bodyText}</p>`;
        }else if(e.target.innerText == "Hybrid"){
            container.innerHTML = `<h1>${object[1].headingContent}</h1>
                <img src="${object[1].imgUrl}" alt="${object[1].imgAlt}">
                <p>${object[1].bodyText}</p>`;
            }else if(e.target.innerText == "Geothermal"){
            container.innerHTML = `<h1>${object[2].headingContent}</h1>
                <img src="${object[2].imgUrl}" alt="${object[2].imgAlt}">
                <p>${object[2].bodyText}</p>`;
        }
        }
    /* 
    Close your handleSelection function here. */  
    

    /* 
    Register all buttons to click event. The event-handler handleSelection will listen 
    for this event to happen. */  

    for (let btn of buttons){
        btn.addEventListener('click', handleSelection);
    }