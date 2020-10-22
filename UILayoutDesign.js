$(document)
    .on('click', '.fa-bars', function () {
        var i = 0;
        $('#mainnav').find('li').each(function () {
            var that = $(this);
            i++;
            (function (i, that) {
                setTimeout(function () {
                    that
                        .animate(
                            { 'left': '20px' },
                            {
                                duration: 350,
                            })
                        .fadeIn({ queue: false });
                })
            }(i, that))
        });
        $('.fa-bars').fadeOut(100, function () {
            $(this)
                .removeClass('fa-bars')
                .addClass('fa-times')
                .fadeIn();
        });
    })
    .on('click', '.fa-times', function () {
        $('#mainnav').find('li')
            .animate(
                { 'left': '-550px' },
                { duration: 250 })
            .fadeOut({ queue: false });

        $('.hamb').fadeOut(100, function () {
            $(this)
                .find($('i'))
                .removeClass('fa-times')
                .addClass('fa-bars')
                .end()
                .fadeIn();
        });
    })