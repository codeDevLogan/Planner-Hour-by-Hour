// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
let currentHour = dayjs().hour();
console.log(currentHour);
let isPM = false;
let hoursArr = [];
for(let i = 0; i<9; i++){
  hoursArr[i] = $(`#hour-${i+9}`);
}
localStorage.setItem('hoursArr', JSON.stringify())
const $saveBtn = $("button");

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  $root = $('#root');
  $timesheet = $('#timesheet')
  for(let i = 9; i<18; i++){
    if(i < currentHour){
      hoursArr[i-9].children(".description").addClass("past");
    }else if(i > currentHour){
      hoursArr[i-9].children(".description").addClass("future");
    }else {
      hoursArr[i-9].children(".description").addClass("present");
    }

    // if(!(localStorage.getItem('hoursArr'))){
    //   if(i>12){
    //     isPM = false;
    //   }else{
    //     isPM = true;
    //   }
    //   let $hour = $(`<div id="hour-${i}">`);
    //   if(i === currentHour){
    //     $hour.attr('class', 'row time-block present');
    //   }else if (i > currentHour){
    //     $hour.attr('class', 'row time-block future');
    //   }else{
    //     $hour.attr('class', 'row time-block past');
    //   }
    //   let $time = $('<div>')
    //   $time.attr('class', 'col-2 col-md-1 hour text-center py-3');
    //   if(isPM){
    //     if(i === 12){
    //       $time.text(`${i} PM`);
    //     }else{
    //       $time.text(`${i} AM`);
    //     }
    //   }else{
    //     if(i === 24){
    //       $time.text(`${i-12} AM`);
    //     }else{
    //       $time.text(`${i-12} PM`);
    //     }
    //   }
    //   let $textArea = $('<textarea class="col-8 col-md-10 description" rows="3"> </textarea');
    //   $saveBtn = $('<button>');
    //   $saveBtn.attr('class', 'btn saveBtn col-2 col-md-1');
    //   $saveBtn.attr('aria-label', 'save');
    //   let $btnIcon = $('<i>');
    //   $btnIcon.attr('class', 'fas fa-save');
    //   if (i >= currentHour){
    //     $btnIcon.attr('aria-hidden', 'true');
    //   }else{
    //     $btnIcon.attr('aria-hidden', 'false');
    //   }
    //   $saveBtn.append($btnIcon);
    //   $hour.append($time, $textArea, $saveBtn)
    //   $timesheet.append($hour);
    //   let objToAdd = {
    //     text: $textArea.text(),
    //     saveButton: $saveBtn,
    //     hourBlock: $hour.append($time, $textArea, $saveBtn)
    //   }
    //   hoursArr[i-9] = objToAdd;
    // }else{
    //   $timesheet.append(hoursArr[i-9].hourBlock);
    // }
    //console.log(hoursArr[i]);
  }
  localStorage.setItem('hoursArr', JSON.stringify(hoursArr));

  let saveTextToLocal = (event) => {
    event.preventDefault();
    eventTar = $(event.target);
    let arrToCheck = JSON.parse(localStorage.getItem('hoursArr'));
    console.log($(this).siblings('textarea'));
    arrToCheck.forEach(element => {
      if(element.saveButton === event.target){
        if(event.target.parent().siblings('textarea')){
          element.text = event.target.parent().siblings('textarea').text();
          console.log(element.text);
          if(!(localStorage.getItem('hasStuff'))){
            localStorage.setItem('hasStuff', true);
          }
        }
      }
    });
    localStorage.setItem('hoursArr', JSON.stringify(arrToCheck)); 
  }
  
  $saveBtn.on('click', saveTextToLocal);

  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
