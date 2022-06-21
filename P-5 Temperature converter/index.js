

const calculateTemp = () => {
    const numbertemp = document.getElementById("temp").value;

    const tempselect = document.getElementById("temp_diff").value;


    const celToFah = (ele) => {
        let fahrenheit = Math.round((ele * 9/5) + 32);
        return fahrenheit;
    }
    const fahToCel = (ele) => {
        let celsius = Math.round((ele -32) * 5/9);
        return celsius;
    }

    
    let result ;

    if(tempselect == 'cel'){
        result = celToFah(numbertemp);
        document.getElementById('resultContainer').innerHTML = `= ${result}&deg;Fahrenheit`;
    }else{
        result = fahToCel(numbertemp);
        document.getElementById('resultContainer').innerHTML = `= ${result}&deg;Celsius`;
    }
}