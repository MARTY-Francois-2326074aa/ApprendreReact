export function Tabs( nomTab ) {
    const BodyTaches = document.querySelector('.BodyTaches');
    const BodyCategories = document.querySelector('.BodyCategories');

    if (nomTab === "Taches") {
        BodyTaches.classList.remove('hidden');
        BodyCategories.classList.add('hidden');
    } else {
        BodyTaches.classList.add('hidden');
        BodyCategories.classList.remove('hidden');
    }
}