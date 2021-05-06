export const collapseHeader = () => {
    const header = document.querySelector('.header');
    if(!!header) {
        header.classList.add('collapsed');
    }
};

export const unCollapseHeader = () => {
    const header = document.querySelector('.header');
    if(!!header) {
        header.classList.remove('collapsed');
    }
};