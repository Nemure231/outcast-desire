
function ready(fn) {
    if (document.readyState != 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

ready(function () {

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

    const tombolTabTujuan = document.getElementById('tombol-tab-tujuan');
    const tombolTabRelasi = document.getElementById('tombol-tab-relasi');

    const tabTujuan = document.getElementById('tab-tujuan');
    const tabRelasi = document.getElementById('tab-relasi');

    const tabRelasiUmpet = document.getElementById('tab-relasi-umpet');
    const tabTujuanUmpet = document.getElementById('tab-tujuan-umpet');

    // const tabBum = document.getElementById('bm');

    tombolTabTujuan.addEventListener('click', () => {

        tombolTabRelasi.classList.remove('rounded-t', 'border-l', 'border-t', 'border-r', 'text-blue-700');
        tombolTabRelasi.classList.add('text-blue-500', 'hover:text-blue-800');

        tombolTabTujuan.classList.remove('text-blue-500', 'hover:text-blue-800');
        tombolTabTujuan.classList.add('rounded-t', 'border-l', 'border-t', 'border-r', 'text-blue-700');

        tabTujuan.classList.remove('mr-1');
        tabTujuan.classList.add('-mb-px', 'mr-1');
    });


    tombolTabTujuan.addEventListener('click', () => {

        tombolTabRelasi.classList.remove('rounded-t', 'border-l', 'border-t', 'border-r', 'text-blue-700');
        tombolTabRelasi.classList.add('text-blue-500', 'hover:text-blue-800');

        tombolTabTujuan.classList.remove('text-blue-500', 'hover:text-blue-800');
        tombolTabTujuan.classList.add('rounded-t', 'border-l', 'border-t', 'border-r', 'text-blue-700');

        tabTujuan.classList.remove('mr-1');
        tabTujuan.classList.add('-mb-px', 'mr-1');

        tabRelasiUmpet.classList.add('hidden');
        tabTujuanUmpet.classList.remove('hidden');

    });

    tombolTabRelasi.addEventListener('click', () => {

        tombolTabRelasi.classList.add('rounded-t', 'border-l', 'border-t', 'border-r', 'text-blue-700');
        tombolTabRelasi.classList.remove('text-blue-500', 'hover:text-blue-800');

        tombolTabTujuan.classList.add('text-blue-500', 'hover:text-blue-800');
        tombolTabTujuan.classList.remove('rounded-t', 'border-l', 'border-t', 'border-r', 'text-blue-700');

        tabTujuan.classList.add('mr-1');
        tabTujuan.classList.remove('-mb-px', 'mr-1');

        tabRelasiUmpet.classList.remove('hidden');
        tabTujuanUmpet.classList.add('hidden');
    });


    menu.addEventListener('click', () => {

        if (mobile.classList.contains('hidden')) {
            mobile.classList.remove('hidden');
        } else {
            mobile.classList.add('hidden');
        }
    });
});