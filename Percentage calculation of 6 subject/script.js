
function calculatePercentages() {
  var subjects = document.querySelectorAll('.subject');
  var overallMarksObtained = 0;
  var overallTotalMarks = 0;
  var individualResults = '';
  subjects.forEach(function(subject, index) {
    var subjectName = subject.querySelector('input[type="text"]').value;
    var marks = parseFloat(subject.querySelector('input[type="number"]').value);
    var total = parseFloat(subject.querySelectorAll('input[type="number"]')[1].value);
    var percentage = (marks / total) * 100;
    overallMarksObtained += marks;
    overallTotalMarks += total;
    individualResults += subjectName + ' Percentage: ' + percentage.toFixed(2) + '%<br>';
  });
  var overallPercentage = (overallMarksObtained / overallTotalMarks) * 100;
  document.getElementById('individualResults').innerHTML = individualResults;
  document.getElementById('overallResult').innerHTML = 'Overall Percentage: ' + overallPercentage.toFixed(2) + '%';
}
