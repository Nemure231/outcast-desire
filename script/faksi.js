
function ready(fn) {
    if (document.readyState != 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

ready(function () {
    // $(document).ready(function () {

    tippy('.link', {
        placement: 'bottom'
    });

    const mediaQuerySm = window.matchMedia('(min-width: 640px)');
    const mediaQueryMd = window.matchMedia('(min-width: 768px)');
    const mediaQueryLg = window.matchMedia('(min-width: 1024px)');

    if (mediaQuerySm.matches) {
        var pd = 35;
        // var nav = false;
    }

    if (mediaQueryMd.matches) {
        var pd = 35;
        // var nav = false;
    }
    if (mediaQueryLg.matches) {
        var pd = 100;
        // var nav = false;
    }

    $('.owl-carousel').owlCarousel({
        margin: 35,
        items: 1,
        stagePadding: pd,

    });



    const toggle = document.querySelector('#js-change-theme');
    const body = document.querySelector('body');

    const bioWelrod = document.getElementById('bio-welrod');
    const deskripsiWelrod = document.getElementById('deskripsi-welrod');


    const menu = document.getElementById('buka-tutup-menu');
    const mobile = document.getElementById('mobile-menu');


    toggle.addEventListener('click', () => {
        if (body.classList.contains('text-gray-900')) {
            toggle.innerHTML = "☀️";
            body.classList.remove('text-gray-900');
            body.classList.add('text-gray-100');


            bioWelrod.classList.remove('bg-gray-100');
            bioWelrod.classList.add('bg-gray-900');
            deskripsiWelrod.classList.remove('bg-gray-100');
            deskripsiWelrod.classList.add('bg-gray-900');


        } else {
            toggle.innerHTML = "🌙";
            body.classList.remove('text-gray-100');
            body.classList.add('text-gray-900');

            bioWelrod.classList.add('bg-gray-100');
            bioWelrod.classList.remove('bg-gray-900');
            deskripsiWelrod.classList.add('bg-gray-100');
            deskripsiWelrod.classList.remove('bg-gray-900');


        }
    });

    const tombolTabMarkasAegis = document.getElementById('tombol-tab-markas-aegis');
    const tombolTabRelasiAegis = document.getElementById('tombol-tab-relasi-aegis');

    const tabMarkasAegis = document.getElementById('tab-markas-aegis');
    const tabRelasiAegis = document.getElementById('tab-relasi-aegis');

    const tabRelasiUmpetAegis = document.getElementById('tab-relasi-umpet-aegis');
    const tabMarkasUmpetAegis = document.getElementById('tab-markas-umpet-aegis');


    tombolTabMarkasAegis.addEventListener('click', () => {

        tombolTabRelasiAegis.classList.remove('rounded-t', 'border-l', 'border-t', 'border-r', 'text-blue-700');
        tombolTabRelasiAegis.classList.add('text-blue-500', 'hover:text-blue-800');

        tombolTabMarkasAegis.classList.remove('text-blue-500', 'hover:text-blue-800');
        tombolTabMarkasAegis.classList.add('rounded-t', 'border-l', 'border-t', 'border-r', 'text-blue-700');

        tabMarkasAegis.classList.remove('mr-1');
        tabMarkasAegis.classList.add('-mb-px', 'mr-1');

        tabRelasiUmpetAegis.classList.add('hidden');
        tabMarkasUmpetAegis.classList.remove('hidden');

    });

    tombolTabRelasiAegis.addEventListener('click', () => {

        tombolTabRelasiAegis.classList.add('rounded-t', 'border-l', 'border-t', 'border-r', 'text-blue-700');
        tombolTabRelasiAegis.classList.remove('text-blue-500', 'hover:text-blue-800');

        tombolTabMarkasAegis.classList.add('text-blue-500', 'hover:text-blue-800');
        tombolTabMarkasAegis.classList.remove('rounded-t', 'border-l', 'border-t', 'border-r', 'text-blue-700');

        tabRelasiAegis.classList.remove('mr-1');
        tabRelasiAegis.classList.add('-mb-px', 'mr-1');

        tabRelasiUmpetAegis.classList.remove('hidden');
        tabMarkasUmpetAegis.classList.add('hidden');
    });


    menu.addEventListener('click', () => {

        if (mobile.classList.contains('hidden')) {
            mobile.classList.remove('hidden');
        } else {
            mobile.classList.add('hidden');
        }
    });


    var kontenAegis = document.getElementById('konten-aegis');
    var kontenEcr = document.getElementById('konten-ecr');
    var kontenGaia = document.getElementById('konten-gaia');

    var tombolAegis = document.getElementById('tombol-aegis');
    var tombolEcr = document.getElementById('tombol-ecr');
    var tombolGaia = document.getElementById('tombol-gaia');

    const klikFaksi = document.getElementsByClassName('klik-faksi');


    Array.prototype.forEach.call(klikFaksi, function (element) {
        element.addEventListener('click', function () {

            if (element.id == 'tombol-ecr') {
                if (kontenEcr.classList.contains('hidden')) {
                    kontenEcr.classList.remove('hidden');
                }

                if (!kontenAegis.classList.contains('hidden')) {
                    kontenAegis.classList.add('hidden');
                }

                if (!kontenGaia.classList.contains('hidden')) {
                    kontenGaia.classList.add('hidden');
                }
            }

            if (element.id == 'tombol-gaia') {
                if (kontenGaia.classList.contains('hidden')) {
                    kontenGaia.classList.remove('hidden');
                }

                if (!kontenAegis.classList.contains('hidden')) {
                    kontenAegis.classList.add('hidden');
                }

                if (!kontenEcr.classList.contains('hidden')) {
                    kontenEcr.classList.add('hidden');
                }
            }

            if (element.id == 'tombol-aegis') {
                if (kontenAegis.classList.contains('hidden')) {
                    kontenAegis.classList.remove('hidden');
                }

                if (!kontenGaia.classList.contains('hidden')) {
                    kontenGaia.classList.add('hidden');
                }

                if (!kontenEcr.classList.contains('hidden')) {
                    kontenEcr.classList.add('hidden');
                }
            }

        });
    });

 


});