import $ from 'jquery';

$('body').append('<button>Click here to get started</button>');
$('body').append('<p id="count"></p>');

let count = 0;

function updateCounter() {
    count++;
    $('#count').html(`${count} clicks on the button`);
}

$('#startBtn').on('click', _.debounce(updateCounter, 500));