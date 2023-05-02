document.addEventListener('DOMContentLoaded', () => {
    const openModalButton = document.querySelectorAll('.open-modal');
    const modelElement = document.querySelector('.wp-block-udemy-plus-auth-modal');
    const modalCloseElement = document.querySelectorAll('.modal-overlay, .modal-btn-close');

    openModalButton.forEach(el => {
        el.addEventListener('click', event => {
            event.preventDefault();

            modelElement.classList.add('modal-show');
        });
    });

    modalCloseElement.forEach(el => {
        el.addEventListener('click', event => {
            event.preventDefault();

            modelElement.classList.remove('modal-show');
        })
    });
});