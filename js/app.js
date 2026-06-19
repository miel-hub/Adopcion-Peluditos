// Base de datos de los cachorros
const puppies = [
    {
        id: 1,
        name: "1RA PEQUEÑA",
        sex: "Hembra",
        dob: "15 de Mayo, 2026",
        color: "Negro, fuego (marrón claro) y pecho blanco.",
        size: "Pequeño-Mediano (estimado)",
        health: "Desparasitado y primera vacuna.",
        personality: "Muy juguetón, le encanta correr y explorar. Tiene una energía inagotable y es muy expresivo con sus grandes orejas.",
        history: "Nació primera y tiene una cola muy singular. Es súper extrovertida, confianzuda y le fascina dormir boca arriba para que le acaricien la barriga.",
        image: "assets/1ra.png",
        gallery: [
            "assets/1ra.png",
            "assets/1ras.png",
            "assets/1rass.png",
            "assets/1rasss.png"
        ],
        video: "https://youtube.com/shorts/qvFr91kjLSc"
    },
    {
        id: 2,
        name: "2DA PEQUEÑA ",
        sex: "Hembra",
        dob: "15 de Mayo, 2026",
        color: "Marrón oscuro con matices negros y blancos alrededor del hocico.",
        size: "Pequeño-Mediano (estimado)",
        health: "Desparasitada y primera vacuna.",
        personality: "Muy juguetón, le encanta correr y explorar. Es el más aventurero y valiente, no le tiene miedo a los ruidos nuevos.",
        history: "Es la observadora del grupo. Le gusta analizar todo antes de actuar y disfruta muchísimo sus siestas profundas después de comer sus grandes raciones. Es muy tranquila, un poco nerviosa y juguetona.",
        image: "assets/2da.png",
        gallery: [
            "assets/2dassss.png",
            "assets/2das.png",
            "assets/2dass.png",
            "assets/2dasss.png"
        ],
        video: "https://youtube.com/shorts/ODGao8nYMi0"
    },
    {
        id: 3,
        name: "3ER PEQUEÑO",
        sex: "Macho",
        dob: "15 de Mayo, 2026",
        color: "Predominantemente oscuro con marcas color fuego en las patas y el rostro.",
        size: "Pequeño-Mediano (estimado)",
        health: "Desparasitada y primera vacuna.",
        personality: "Tiene un lado muy mimoso. Le gusta mucho que lo carguen.",
        history: "Es el observador del grupo. Le gusta analizar todo antes de actuar y disfruta muchísimo sus siestas profundas después de comer sus grandes raciones.",
        image: "assets/3ra.png",
        gallery: [
            "assets/3ras.png",
            "assets/3rass.png",
            "assets/3rasss.png",
            "assets/3rassss.png",
            "assets/3rasssss.png",
            "assets/3rassssss.png"
        ],
        video: "https://youtube.com/shorts/af0ucnYlYdE"
    },
    {
        id: 4,
        name: "4TA PEQUEÑA",
        sex: "Hembra",
        dob: "15 de Mayo, 2026",
        color: "Blanco con ligeros tonos crema en las orejas.",
        size: "Pequeño-Mediano (estimado)",
        health: "Desparasitado y primera vacuna.",
        personality: "Muy juguetón, le encanta correr.",
        history: "Siempre se la pasa molestando a sus hermanos, es inquieta, es la mas juguetona de la manada.",
        image: "assets/4tas.png",
        gallery: [
            "assets/4tass.png",
            "assets/4tasss.png",
            "assets/4tasssss.png",
            "assets/4tassssss.png",
            "assets/4tassss.png"
        ],
        video: "https://youtube.com/shorts/jtKuiKwgLoM"
    },
    {
        id: 5,
        name: " 5TA PEQUEÑA",
        sex: "Hembra",
        dob: "15 de Mayo, 2026",
        color: "Blanco con simpáticas manchas marrones claras en las orejas y carita.",
        size: "Pequeño-Mediano (estimado)",
        health: "Desparasitado y primera vacuna.",
        personality: "Es juguetona, comelona y rápida.",
        history: "Última en nacer, es cariñosa y le encanta morder. Come bastante bien, pero siempre sabe cómo poner cara de inocente para pedir un poquito más de comida.",
        image: "assets/5tas.png",
        gallery: [
            "assets/5tas.png",
            "assets/image.png",
            "assets/5tass.png",
            "assets/image copy 2.png"
        ],
        video: "https://youtube.com/shorts/Zg4jK_bqloo"
    }
];

let adoptionList = []; // Nuestro "carrito" de adopción

// Función para cambiar entre pantallas (Home, Catálogo, Detalles, Formulario)
function showSection(sectionId) {
    document.querySelectorAll('section').forEach(sec => {
        sec.classList.remove('active-section');
        sec.classList.add('hidden-section');
    });
    document.getElementById(sectionId).classList.remove('hidden-section');
    document.getElementById(sectionId).classList.add('active-section');
    window.scrollTo(0, 0);
}

// Función para mostrar todos los cachorros en la página de catálogo
function renderCatalog() {
    const grid = document.getElementById('puppies-grid');
    grid.innerHTML = '';
    
    puppies.forEach(puppy => {
        const card = document.createElement('div');
        card.className = 'puppy-card';
        card.innerHTML = `
            <img src="${puppy.image}" alt="${puppy.name}">
            <h3>${puppy.name}</h3>
            <p>${puppy.sex} | ${puppy.color}</p>
            <button class="btn-primary" onclick="viewDetails(${puppy.id})">Más detalles</button>
        `;
        grid.appendChild(card);
    });
}

// Función para cambiar la imagen principal al hacer clic en la galería
function changeMainImage(newSrc) {
    const mainImg = document.getElementById('main-puppy-img');
    mainImg.src = newSrc;
    // Volver la imagen a su posición original al cambiar de foto
    mainImg.style.transform = 'rotate(0deg)';
    mainImg.setAttribute('data-angle', '0');
}

// Nueva función mágica para girar la imagen
function rotateImage() {
    const img = document.getElementById('main-puppy-img');
    let currentAngle = parseInt(img.getAttribute('data-angle')) || 0;
    currentAngle += 90;
    if (currentAngle === 360) currentAngle = 0;
    
    img.setAttribute('data-angle', currentAngle);
    img.style.transform = `rotate(${currentAngle}deg)`;
}

// Función para ver la página individual de un cachorro
function viewDetails(id) {
    const puppy = puppies.find(p => p.id === id);
    const detailContainer = document.getElementById('puppy-detail-content');
    
    const buttonTexts = ["¡Quiero adoptarlo!", "Llevar a mi familia", "Iniciar adopción", "¡Me enamoré de este cachorro!"];
    const randomText = buttonTexts[Math.floor(Math.random() * buttonTexts.length)];

    // Generar el código HTML para las miniaturas de la galería si existen
    let galleryHTML = '';
    if (puppy.gallery && puppy.gallery.length > 0) {
        galleryHTML = '<div class="gallery-thumbnails">';
        puppy.gallery.forEach(imgUrl => {
            galleryHTML += `<img src="${imgUrl}" class="thumbnail" onclick="changeMainImage('${imgUrl}')" alt="Foto miniatura">`;
        });
        galleryHTML += '</div>';
    }

    // Generar el código HTML para el video local MP4
// Generar el código HTML para el video local MP4 (Estilo Cine)
let videoHTML = '';
    if (puppy.video) {
        videoHTML = `
            <div class="video-container" style="width: 100%; margin-top: 20px; background: transparent; border: none; padding: 0;">
                <h3 class="video-title" style="margin-bottom: 15px;">Mira a ${puppy.name} en acción 🎥</h3>
                <div style="width: 100%; background-color: #000; border-radius: 15px; overflow: hidden; box-shadow: 0 8px 16px rgba(0,0,0,0.2); position: relative; padding-bottom: 56.25%; height: 0;">
                    <iframe src="${puppy.video}" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        `;
    }

    // Inyectar todo en la pantalla (Video movido al final)
    detailContainer.innerHTML = `
        <div class="detail-img-section" style="flex: 1; min-width: 300px;">
            <div class="main-img-container" style="position: relative; overflow: hidden; border-radius: 20px;">
                <img id="main-puppy-img" src="${puppy.image}" alt="${puppy.name}" data-angle="0">
                <button class="rotate-btn" onclick="rotateImage()" title="Girar foto">↻</button>
            </div>
            ${galleryHTML}
        </div>
        <div class="detail-info" style="flex: 1; min-width: 300px;">
            <h2>${puppy.name}</h2>
            <p><strong>Sexo:</strong> ${puppy.sex}</p>
            <p><strong>Nacimiento:</strong> ${puppy.dob}</p>
            <p><strong>Color:</strong> ${puppy.color}</p>
            <p><strong>Tamaño esperado:</strong> ${puppy.size}</p>
            <p><strong>Estado de salud:</strong> ${puppy.health}</p>
            <br>
            <p><strong>Personalidad:</strong> ${puppy.personality}</p>
            <p><strong>Historia:</strong> ${puppy.history}</p>
            <button class="btn-primary adopt-btn" onclick="addToAdoption(${puppy.id})">${randomText}</button>
        </div>
        ${videoHTML} `;
    showSection('detail-section');
}

// Función para agregar un cachorro a la lista de adopción
function addToAdoption(id) {
    const puppy = puppies.find(p => p.id === id);
    if (!adoptionList.some(p => p.id === id)) {
        adoptionList.push(puppy);
        document.getElementById('cart-count').innerText = adoptionList.length;
        alert(`¡${puppy.name} fue agregado a tu lista de adopción!`);
    } else {
        alert(`${puppy.name} ya está en tu lista.`);
    }
    renderAdoptionList();
}

// Función para mostrar la lista en el "carrito"
// Función para mostrar la lista en el "carrito"
function renderAdoptionList() {
    const cartContainer = document.getElementById('cart-items');
    const formContainer = document.getElementById('adoption-form-container');
    cartContainer.innerHTML = '';

    if (adoptionList.length === 0) {
        // Mensaje elegante cuando no hay peluditos seleccionados
        cartContainer.innerHTML = `
            <div style="background-color: #FAF5F0; border-radius: 25px; padding: 50px 20px; text-align: center; margin: 40px auto; max-width: 600px; box-shadow: 0 15px 35px rgba(0,0,0,0.4); border: 2px solid rgba(255, 255, 255, 0.9);">
                <h3 style="color: #3E2723; font-size: 1.8rem; font-family: 'Poppins', sans-serif; margin-bottom: 10px;">🐾 ¡Tu lista está vacía!</h3>
                <p style="color: #8D6E63; font-size: 1.2rem; font-style: italic; font-weight: 600;">Aún no has seleccionado ningún peludito para adoptar.</p>
            </div>
        `;
        formContainer.style.display = 'none';
        return;
    }

    adoptionList.forEach((puppy, index) => {
        const item = document.createElement('div');
        item.className = 'cart-item';
        item.innerHTML = `
            <img src="${puppy.image}" alt="${puppy.name}">
            <div>
                <h4 style="color: #3E2723; font-family: 'Poppins', sans-serif;">${puppy.name}</h4>
                <p style="color: #8D6E63; font-style: italic; font-weight: 600;">${puppy.sex}</p>
            </div>
            <button class="remove-btn" onclick="removeFromAdoption(${index})" style="background-color: #5D4037; border: none; padding: 10px 20px; border-radius: 20px; color: white; cursor: pointer; font-weight: bold; transition: 0.3s;">Eliminar</button>
        `;
        cartContainer.appendChild(item);
    });

    formContainer.style.display = 'block';
}

function removeFromAdoption(index) {
    adoptionList.splice(index, 1);
    document.getElementById('cart-count').innerText = adoptionList.length;
    renderAdoptionList();
}

// Iniciar la página cargando el catálogo
renderCatalog();

// --- CONFIGURACIÓN DE EMAILJS ---
emailjs.init('6Snb8J5EAX92Ce8lh');

document.getElementById('adoption-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const submitBtn = document.querySelector('.submit-btn');
    submitBtn.innerText = 'Enviando...';
    submitBtn.disabled = true;

    const selectedPuppiesNames = adoptionList.map(p => p.name).join(', ');

    const templateParams = {
        to_name: "Responsable de Adopción",
        user_name: document.getElementById('user_name').value,
        user_email: document.getElementById('user_email').value,
        user_phone: document.getElementById('user_phone').value,
        user_location: document.getElementById('user_location').value,
        home_type: document.getElementById('home_type').value,
        family_details: document.getElementById('family_details').value,
        adoption_motive: document.getElementById('adoption_motive').value,
        selected_puppies: selectedPuppiesNames
    };

    emailjs.send('service_h54r2q6', 'template_szyq45e', templateParams)
        .then(function(response) {
            alert('¡Éxito! Tu solicitud ha sido enviada. Nos pondremos en contacto contigo pronto.');
            adoptionList = [];
            document.getElementById('cart-count').innerText = '0';
            renderAdoptionList();
            document.getElementById('adoption-form').reset();
            showSection('home-section');
            submitBtn.innerText = 'Enviar Solicitud de Adopción';
            submitBtn.disabled = false;
        }, function(error) {
            alert('Hubo un error al enviar la solicitud. Intenta de nuevo.');
            submitBtn.innerText = 'Enviar Solicitud de Adopción';
            submitBtn.disabled = false;
        });
});
