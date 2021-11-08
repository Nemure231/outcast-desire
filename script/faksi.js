
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

    const kWelrod = document.getElementById('bio-welrod');
    const deskripsiWelrod = document.getElementById('deskripsi-welrod');


    const menu = document.getElementById('buka-tutup-menu');
    const mobile = document.getElementById('mobile-menu');


    var kontenAegis = document.getElementById('konten-aegis');
    var kontenEcr = document.getElementById('konten-ecr');
    var kontenGaia = document.getElementById('konten-gaia');

    var ikonAegis = document.getElementById('ikon-aegis');
    var ikonGaia = document.getElementById('ikon-gaia');
    var ikonEcr = document.getElementById('ikon-ecr');

    var ikonAegisKecil = document.getElementById('ikon-aegis-kecil');
    var ikonGaiaKecil = document.getElementById('ikon-gaia-kecil');
    var ikonEcrKecil = document.getElementById('ikon-ecr-kecil');


    toggle.addEventListener('click', () => {
        if (body.classList.contains('text-gray-900')) {
            toggle.innerHTML = "☀️";
            body.classList.remove('text-gray-900');
            body.classList.add('text-gray-100');


            kontenAegis.classList.remove('bg-gray-100');
            kontenAegis.classList.add('bg-gray-900');
            kontenEcr.classList.remove('bg-gray-100');
            kontenEcr.classList.add('bg-gray-900');
            kontenGaia.classList.remove('bg-gray-100');
            kontenGaia.classList.add('bg-gray-900');
            ikonAegis.classList.add('text-green-500');
            ikonEcr.classList.add('text-green-500');
            ikonGaia.classList.add('text-green-500');
            ikonAegisKecil.classList.add('text-green-500');
            ikonEcrKecil.classList.add('text-green-500');
            ikonGaiaKecil.classList.add('text-green-500');



        } else {
            toggle.innerHTML = "🌙";
            body.classList.remove('text-gray-100');
            body.classList.add('text-gray-900');

            kontenAegis.classList.add('bg-gray-100');
            kontenAegis.classList.remove('bg-gray-900');
            kontenEcr.classList.add('bg-gray-100');
            kontenEcr.classList.remove('bg-gray-900');
            kontenGaia.classList.add('bg-gray-100');
            kontenGaia.classList.remove('bg-gray-900');

            ikonAegis.classList.remove('text-green-500');
            ikonEcr.classList.remove('text-green-500');
            ikonGaia.classList.remove('text-green-500');
            ikonAegisKecil.classList.remove('text-green-500');
            ikonEcrKecil.classList.remove('text-green-500');
            ikonGaiaKecil.classList.remove('text-green-500');


        }
    });

    const tombolTabMarkasAegis = document.getElementById('tombol-tab-markas-aegis');
    const tombolTabRelasiAegis = document.getElementById('tombol-tab-relasi-aegis');

    const tabMarkasAegis = document.getElementById('tab-markas-aegis');
    const tabRelasiAegis = document.getElementById('tab-relasi-aegis');

    const tabRelasiUmpetAegis = document.getElementById('tab-relasi-umpet-aegis');
    const tabMarkasUmpetAegis = document.getElementById('tab-markas-umpet-aegis');


    tombolTabMarkasAegis.addEventListener('click', () => {

        tombolTabRelasiAegis.classList.remove('rounded-t', 'border-l', 'border-t', 'border-r', 'text-green-700');
        tombolTabRelasiAegis.classList.add('text-green-500', 'hover:text-green-800');

        tombolTabMarkasAegis.classList.remove('text-green-500', 'hover:text-green-800');
        tombolTabMarkasAegis.classList.add('rounded-t', 'border-l', 'border-t', 'border-r', 'text-green-700');

        tabMarkasAegis.classList.remove('mr-1');
        tabMarkasAegis.classList.add('-mb-px', 'mr-1');

        tabRelasiUmpetAegis.classList.add('hidden');
        tabMarkasUmpetAegis.classList.remove('hidden');

    });

    tombolTabRelasiAegis.addEventListener('click', () => {

        tombolTabRelasiAegis.classList.add('rounded-t', 'border-l', 'border-t', 'border-r', 'text-green-700');
        tombolTabRelasiAegis.classList.remove('text-green-500', 'hover:text-green-800');

        tombolTabMarkasAegis.classList.add('text-green-500', 'hover:text-green-800');
        tombolTabMarkasAegis.classList.remove('rounded-t', 'border-l', 'border-t', 'border-r', 'text-green-700');

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



    // var tombolAegis = document.getElementById('tombol-aegis');
    // var tombolEcr = document.getElementById('tombol-ecr');
    // var tombolGaia = document.getElementById('tombol-gaia');

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