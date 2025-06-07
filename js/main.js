// !FUNCTION

    /**
     * ### This function returns the price of a ticket {number} and the type of the ticket {string}.
     * - the parameter "user_age" is a selection between options identified by numbers:
     *      - Minorenne = 0
     *      - Maggiorenne = 1
     *      - Over 65 = 2  
     * @param {number} user_km 
     * @param {number} user_age 
     * @param {number} price_for_km 
     */
    function ticket_price_calculator(user_km, user_age, price_for_km) {
        let ticket_type_text = ""
        const discount = [0.2, 0, 0.4];
        const ticket_type = ['Biglietto Junior', 'Biglietto standard', 'Biglietto Senior']
        
        let ticket_price = user_km * price_for_km
        


        if(user_age == 0){

            // va applicato uno sconto del 20% per i minorenni (età < 18)
            ticket_price = ticket_price - (ticket_price * discount[0])
            ticket_type_text = ticket_type[0]
            
            // L'output 
            return {
                ticket_type_text : ticket_type_text,
                ticket_price: ticket_price
            };
            
            
        }else if(user_age == 2){
            
            // va applicato uno sconto del 40% per gli over 65. (età > 65)
            ticket_price = ticket_price - (ticket_price * discount[2])
            ticket_type_text = ticket_type[2]
            
            // L'output 
            return {
                ticket_type_text : ticket_type_text,
                ticket_price: ticket_price
            };
        }else if (user_age == 1){
            ticket_type_text = ticket_type[1]
            
            // L'output 
            return {
                ticket_type_text : ticket_type_text,
                ticket_price: ticket_price
            };
        }
    }

    /**
     * This functions returns a ramndom number between a min and max
     * @param {number} min 
     * @param {number} max 
     * @returns 
     */
    function random_number(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
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

    

    button_sub_El.addEventListener('click', (e) => {
        //Declaring the constants for the input datas
        const user_age_value = Number(user_age_El.value) 
        const user_km_value = Number(user_km_El.value)
        const user_name_value = user_name_El.value
        let ticket_function_result = ticket_price_calculator(user_km_value, user_age_value, 0.21);
        let ticket_price_value = ticket_function_result.ticket_price.toLocaleString("en-US", {style:"currency", currency:"EUR"})
        let ticket_type = ticket_function_result.ticket_type_text

        if(!ticket_price_value){
            console.log(user_age_value);
            return
        }

        console.log(ticket_price_value);
        const output_cp_code_value = random_number(9000, 10000)
        const output_sit_number_value = random_number(1,12)
        e.preventDefault();

        console.log(user_age_value, user_km_value, user_name_value, ticket_price_value);

        output_data_passenger_El.classList.toggle('d-none')

        output_user_name_El.innerHTML = user_name_value;
        output_ticket_type_El.innerHTML = ticket_type;
        output_sit_number_El.innerHTML = output_sit_number_value;
        output_cp_code_El.innerHTML = output_cp_code_value;
        output_ticket_price_El.innerHTML = ticket_price_value


        


        
        
    })
    
    btn_reset_data_El.addEventListener('click', () => {
    
        location.reload();
        
    })


    




    

    
