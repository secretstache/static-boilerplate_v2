/* stylize upload button */

$(function() {

    $('.input-file').each(function() {
        var container = $(this).find('.ginput_container');
        var label = $(this).find('label');

        label.detach().appendTo(container);

        $(this).css('opacity', 1);
    })


    var inputs = document.querySelectorAll('.input-file [type="file"]');
    Array.prototype.forEach.call(inputs, function(input)
    {
        var label = input.nextElementSibling,
            labelVal = label.innerHTML;

        input.addEventListener('change', function(e)
        {
            var fileName = '';

            if (this.files)
                fileName = e.target.value.split('\\').pop();

            if (fileName)
                label.innerHTML = fileName;
            else
                label.innerHTML = labelVal;
        });
    });
});