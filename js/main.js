// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero
    //dichiaro le variabili per l'età e i km e ne prendo il dato dal form
    const user_name_El = document.getElementById("user_full_name")
    const user_km_El = document.getElementById('user_km_trip')
    const user_age_El = document.getElementById()
    

// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

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

        if(user_age < 18){

            // va applicato uno sconto del 20% per i minorenni (età < 18)
            ticket_price = ticket_price - (ticket_price * 0.2)
    
            // L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
            alert(ticket_price.toLocaleString("en-US", {style:"currency", currency:"EUR"}));
            
        }else if(user_age > 65){
    
            // va applicato uno sconto del 40% per gli over 65. (età > 65)
            ticket_price = ticket_price - (ticket_price * 0.4)
    
            // L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
            alert(ticket_price.toLocaleString("en-US", {style:"currency", currency:"EUR"}));
        }else{
    
            // L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
            alert(ticket_price.toLocaleString("en-US", {style:"currency", currency:"EUR"}));
        }
    }
    

    
