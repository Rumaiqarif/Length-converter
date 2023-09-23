
  function convertLength(event) {
    event.preventDefault();
    
    const from = document.getElementById("from").value;
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;
    let result = 0;
    
    // Convert the from unit to meters
    switch (fromUnit) {
      case "m":
        result = from;
        break;
      case "cm":
        result = from / 100;
        break;
      case "in":
        result = from / 39.3701;
        break;
      case "ft":
        result = from / 3.28084;
        break;
      case "yd":
        result = from / 1.09361;
        break;
      case "mi":
        result = from / 0.000621371;
        break;
    }
    
    // Convert the meters to the to unit
    switch (toUnit) {
      case "m":
        result = result;
        break;
      case "cm":
        result = result * 100;
        break;
      case "in":
        result = result * 39.3701;
        break;
      case "ft":
        result = result * 3.28084;
        break;
      case "yd":
        result = result * 1.09361;
        break;
      case "mi":
        result = result * 0.000621371;
        break;
    }
    
    // Round the result to two decimal places
    result = result.toFixed(2);
    
    // Set the value of the "To" input to the result
    document.getElementById("to").value = result;
    
    // Show the result
    document.getElementById("result").textContent = `${from} ${fromUnit} is equal to ${result} ${toUnit}`;
  }
