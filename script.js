var noteTemp =
  '<div class="note">' +
  '<a href="javascript:;" class="button remove">X</a>' +
  '<div class="note_cnt">' +
  '<textarea class="title" placeholder="Enter note title"></textarea>' +
  '<textarea class="cnt" placeholder="Enter note description here"></textarea>' +
  "</div> " +
  "</div>";
  
$("#btn-add").click(function() {
  $(this).before(noteTemp);
  $(".remove").click(deleteBtn);
});
function deleteBtn() {
  $(this)
    .parent(".note")
    .hide("puff", { percent: 133 }, 250);
}
