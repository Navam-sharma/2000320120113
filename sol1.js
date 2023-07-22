const url = 'http://20.244.56.144/numbers/odd';
fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    
    const jsonData = data;
const numbersArray = jsonData.numbers;
numbersArray.sort((a, b) => a - b);
const uniqueNumbers = [...new Set(numbersArray)];
console.log(uniqueNumbers);

  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
