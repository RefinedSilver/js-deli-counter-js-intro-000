function takeANumber (currentLine, newCust) {
  currentLine.push(newCust);
  let nextInLine = [('Welcome ' + newCust + '. You are number ' + currentLine.length + ' in line.')];
  return nextInLine;
}
function nowServing (currentLine) {
  if(!currentLine.length) {
    return 'There is nobody waiting to be served!';
  }
}
'The current line is empty.'