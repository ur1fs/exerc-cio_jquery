$(document).ready(function() {
    $('#task-form').submit(function(e) {
      e.preventDefault();
      const taskText = $('#task-input').val().trim();
      if (taskText !== '') {
        const taskItem = `<li>${taskText}</li>`;
        $('#task-list').append(taskItem);
        $('#task-input').val('');
      }
    });
  
    $('#task-list').on('click', 'li', function() {
      $(this).toggleClass('completed');
    });
  });
  