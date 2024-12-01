document.getElementById('areaForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const width = document.getElementById('width').value;
    const height = document.getElementById('height').value;
    
    if (width > 0 && height > 0) {
      const area = width * height;
      document.getElementById('result').textContent = `The area of the rectangle is ${area} square units.`;
    } else {
      document.getElementById('result').textContent = 'Please enter valid positive numbers.';
    }
  });
  