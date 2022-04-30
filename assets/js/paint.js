function configureListeners() {
    //selected with the img type
    let images = document.querySelectorAll('img'); // select img elements  


     for (var i = 0; i < images.length; i++) {        
        // iterate over images and add mouseover event listeners  
        //mouseover for adding opacity
        images[i].addEventListener('mouseover', addOpacity, false); 
        //mouseout for removing opacity
        images[i].addEventListener('mouseout', removeOpacity, false) ;   
    } 
}

function addOpacity(event) {
    // add appropriate CSS class
    //adds 'dim' from the class list
    this.classList.add('dim');

    //Was wondering if this lower version was better because
    //it was in the solution code, but I got it working without it.
    //Also wondering what the exclamation mark means because
    //I was testing this code and it only worked with the exclamation mark,
    //but then the remove version didn't need it.

    // if(!this.classList.contains('dim')){
    //     this.classList.add('dim');
    // }
    
    
    getProductInfo(event.target.id);     
}

function removeOpacity(event) {
     //remove appropriate CSS class
     //removes 'dim' from the class list
    this.classList.remove('dim');
    
    // if(this.classList.contains('dim')){
    //     this.classList.remove('dim');
    // }
    

    let element = document.getElementById('color-price');
        element.textContent = '';
        
    let color = document.getElementById('color-name');
        color.textContent = ''; 

    event.preventDefault();    
}

function getProductInfo(paintColor) {
    let price;
    let colorName;  
    
    switch (paintColor) {
        case 'pn1':           
            // set variables for price and color name and invoke a function to update the price
            price = '14.99'; //change price
            colorName = 'Lime Green'; //change color name
            updatePrice(colorName, price); //invokes function to update
            break;           
        case 'pn2':
            // set variables for price and color name and invoke a function to update the price    
            price = '$11.14';
            colorName = 'Medium Brown';
            updatePrice(colorName, price);
            break;            
        case 'pn3':
            // set variables for price and color name and invoke a function to update the price  
            price = '$22.99';
            colorName = 'Royal Blue';
            updatePrice(colorName, price);
            break;   
        case 'pn4':
            // set variables for price and color name and invoke a function to update the price  
            price = '$13.42';
            colorName = 'Solid Red';
            updatePrice(colorName, price);
            break;   
        case 'pn5':
            // set variables for price and color name and invoke a function to update the price       
            price = '$21.98';
            colorName = 'Solid White';
            updatePrice(colorName, price);
            break;   
        case 'pn6':
            // set variables for price and color name and invoke a function to update the price        );
            price = '$4.99';
            colorName = 'Solid Black';
            updatePrice(colorName, price);
            break;   
        case 'pn7':
            // set variables for price and color name and invoke a function to update the price 
            price = '$8.22';
            colorName = 'Solid Cyan';
            updatePrice(colorName, price);
            break;   
        case 'pn8':
            // set variables for price and color name and invoke a function to update the price   
            price = '$11.99';
            //Wondering if this is really purple, or if the assignment details
            //changed, or if my PC is not showing the color correctly. 
            //My PC tends to do with that purple/blue, so it looks blue to me,
            //but maybe it's really purple?
            colorName = 'Solid Purple'; 
            updatePrice(colorName, price);
            break;   
        case 'pn9':
            // set variables for price and color name and invoke a function to update the price 
            price = '$14.99';
            colorName = 'Solid Yellow';
            updatePrice(colorName, price);
            break;   
          default:              
    }

    function updatePrice(colorName, price)
    {       
        let colorPrice = document.getElementById('color-price'); // select element with corresponding id
        //textContent to change the price number
        colorPrice.textContent = price; // display price
        
        let color = document.getElementById('color-name'); // select element with corresponding id
        color.textContent = colorName; //display color name
    }
    
}
