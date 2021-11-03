tippy('.link', {
    placement: 'bottom'
})

$(function () {
    $('.owl-carousel').owlCarousel({
        margin: 35,
        loop: false,
        items: 1,
        stagePadding: 100
    });


});


const toggle = document.querySelector('#js-change-theme');
const body = document.querySelector('body');

const bioWelrod = document.getElementById('bio-welrod');
const deskripsiWelrod = document.getElementById('deskripsi-welrod');

const bioA02 = document.getElementById('bio-a02');
const deskripsiA02 = document.getElementById('deskripsi-a02');

const bioAngelica = document.getElementById('bio-angelica');
const deskripsiAngelica = document.getElementById('deskripsi-angelica');

const bioDaniel = document.getElementById('bio-daniel');
const deskripsiDaniel = document.getElementById('deskripsi-daniel');

const bioNeoman = document.getElementById('bio-neoman');
const deskripsiNeoman = document.getElementById('deskripsi-neoman');

const bioAnthony = document.getElementById('bio-anthony');
const deskripsiAnthony = document.getElementById('deskripsi-anthony');

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

        bioA02.classList.remove('bg-gray-100');
        bioA02.classList.add('bg-gray-900');
        deskripsiA02.classList.remove('bg-gray-100');
        deskripsiA02.classList.add('bg-gray-900');

        bioAngelica.classList.remove('bg-gray-100');
        bioAngelica.classList.add('bg-gray-900');
        deskripsiAngelica.classList.remove('bg-gray-100');
        deskripsiAngelica.classList.add('bg-gray-900');

        bioDaniel.classList.remove('bg-gray-100');
        bioDaniel.classList.add('bg-gray-900');
        deskripsiDaniel.classList.remove('bg-gray-100');
        deskripsiDaniel.classList.add('bg-gray-900');

        bioNeoman.classList.remove('bg-gray-100');
        bioNeoman.classList.add('bg-gray-900');
        deskripsiNeoman.classList.remove('bg-gray-100');
        deskripsiNeoman.classList.add('bg-gray-900');

        bioAnthony.classList.remove('bg-gray-100');
        bioAnthony.classList.add('bg-gray-900');
        deskripsiAnthony.classList.remove('bg-gray-100');
        deskripsiAnthony.classList.add('bg-gray-900');


    } else {
        toggle.innerHTML = "🌙";
        body.classList.remove('text-gray-100');
        body.classList.add('text-gray-900');

        bioWelrod.classList.add('bg-gray-100');
        bioWelrod.classList.remove('bg-gray-900');
        deskripsiWelrod.classList.add('bg-gray-100');
        deskripsiWelrod.classList.remove('bg-gray-900');

        bioA02.classList.add('bg-gray-100');
        bioA02.classList.remove('bg-gray-900');
        deskripsiA02.classList.add('bg-gray-100');
        deskripsiA02.classList.remove('bg-gray-900');

        bioAngelica.classList.add('bg-gray-100');
        bioAngelica.classList.remove('bg-gray-900');
        deskripsiAngelica.classList.add('bg-gray-100');
        deskripsiAngelica.classList.remove('bg-gray-900');

        bioDaniel.classList.add('bg-gray-100');
        bioDaniel.classList.remove('bg-gray-900');
        deskripsiDaniel.classList.add('bg-gray-100');
        deskripsiDaniel.classList.remove('bg-gray-900');

        bioNeoman.classList.add('bg-gray-100');
        bioNeoman.classList.remove('bg-gray-900');
        deskripsiNeoman.classList.add('bg-gray-100');
        deskripsiNeoman.classList.remove('bg-gray-900');

        bioAnthony.classList.add('bg-gray-100');
        bioAnthony.classList.remove('bg-gray-900');
        deskripsiAnthony.classList.add('bg-gray-100');
        deskripsiAnthony.classList.remove('bg-gray-900');

    }
});



menu.addEventListener('click', () => {

    if (mobile.classList.contains('hidden')) {
        mobile.classList.remove('hidden');
    } else {
        mobile.classList.add('hidden');
    }
});