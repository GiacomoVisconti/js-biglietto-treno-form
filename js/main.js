// !FUNCTION
 // il prezzo del biglietto è definito in base ai km (0.21 € al km) e ne dichiaro la variabile 
    /**
     * ### This function returns the price of a ticket {number}.
     * - the parameter "user_age" is a selection between options identified by numbers:
     *      - Minorenne = 1
     *      - Maggiorenne = 2
     *      - Over 65 = 3  
     * @param {number} user_km 
     * @param {number} user_age 
     */
    function ticket_price_calculator(user_km, user_age) {

        const price_for_km  = 0.21
        let ticket_price = user_km * price_for_km

        if(user_age == 1){

            // va applicato uno sconto del 20% per i minorenni (età < 18)
            ticket_price = ticket_price - (ticket_price * 0.2)
    
            // L'output 
            return ticket_price
            
        }else if(user_age == 3){
    
            // va applicato uno sconto del 40% per gli over 65. (età > 65)
            ticket_price = ticket_price - (ticket_price * 0.4)
    
            // L'output 
            return ticket_price
        }else if (user_age == 2){
    
            // L'output 
            return ticket_price
        }
    }

// !END FUNCTION

// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero

    //Input part variables
    const user_name_El = document.getElementById("user_full_name")
    const user_km_El = document.getElementById('user_km_trip')
    const user_age_El = document.getElementById('user_age')
    const button_sub_El = document.getElementById('btn_submit_data')
    const btn_reset_data_El = document.getElementById('btn_reset_data')
    const form_El = document.querySelector('form')

    //Output part variables
    const output_data_passenger_El = document.getElementById('passenger_info_card')
    const output_user_name_El = document.querySelector('.passenger_name');
    const output_ticket_type_El = document.querySelector('.ticket_type');
    const output_sit_number_El = document.querySelector('.sit_number');
    const output_cp_code_El = document.querySelector('.cp_code');
    const output_ticket_price_El = document.querySelector('.ticket_price');

    form_El.addEventListener('submit', (e) => {
        //Disable the reload of the page
        e.preventDefault();
    })

    button_sub_El.addEventListener('click', () => {
        //Declaring the constants for the input datas
        const user_age_value = user_age_El.value 
        const user_km_value = user_km_El.value
        const user_name_value = user_name_El.value
        let ticket_price_value = ticket_price_calculator(user_km_value, user_age_value);
        ticket_price_value = ticket_price_value.toLocaleString("en-US", {style:"currency", currency:"EUR"})
        

        console.log(user_age_value, user_km_value, user_name_value, ticket_price_value);

        output_data_passenger_El.classList.toggle('d-none')

        output_user_name_El.innerHTML = user_name_value;
        output_ticket_type_El.innerHTML = 'Biglietto Standard';
        output_sit_number_El.innerHTML = '5';
        output_cp_code_El.innerHTML = '92911';
        output_ticket_price_El.innerHTML = ticket_price_value


        


        
        
    })
    
    btn_reset_data_El.addEventListener('click', () => {
    
        location.reload();
        
    })


    




    

    
