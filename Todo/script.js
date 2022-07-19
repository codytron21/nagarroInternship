// $(document).ready(function () {
//     $("button").click(function () {
//         $("h1").css();
//     });
// });
$(document).ready(function () {

    $('#input').change(function () {
        var input = $(this).val();
        // $('ul').append('<li>' + input + '<i class="fa fa-check fa-trash "> </li>');
        $('ul').append(`<li> ${input} <i class="fa fa-trash">   </li>`);
        $(this).val('');
    });

    // $('#todo').on('click', '.fa-check', function () {
    //     const donelist = $('ul li:first').text();
    //     if (confirm(`DONE: ${donelist}`)) {
    //         $(this).parent('li').remove();
    //         console.log("here")
    //     }
    // });

    $('ul').on('click', '.fa-trash', function () {
        console.log("deleted");
        $(this).parent('li').remove();
    });
});