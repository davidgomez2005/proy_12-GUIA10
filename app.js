const colors = require('colors');

const {mostrarMenu, pausa} = require('./proy_modules/menu');

const main = async() => {
    console.clear;
    console.log('****************************');
    console.log('*      MENU PRINCIPAL      *');
    console.log('****************************\n');

    let option = 0;
    do {
        do{
            option = await mostrarMenu();
        }while(!(option >=0 && option<=7))

        if (option !== `0`){
            console.log(`\nse ejecuta el proceso ${option}`);
            await pausa();
        }
    } 
    while( option !== `0`);
};

main();