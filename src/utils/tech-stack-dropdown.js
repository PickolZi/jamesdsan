// Toggles the Programming Tech-stack drop down rows.
const techStackDropDownMenu = () => {
    const techStackRows = document.querySelectorAll('.tech-stack-row');

    techStackRows.forEach((techStackRow) => {
        techStackRow.addEventListener('click', () => {
            const techStackRowContent = techStackRow.querySelector('div');
            
            closeAllRows(techStackRows);
            toggleRow(techStackRowContent);

        });        
    });  

    // Toggles the div dropdown for the Tech-stack row content
    function toggleRow(techStackRowContent) {
        let techStackRowContentVisibility = techStackRowContent.style.display;

        if (techStackRowContentVisibility == "none") {
            techStackRowContent.style.display = 'flex';
            techStackRowContent.classList.remove('dropdown-animation-off');
            techStackRowContent.classList.add('dropdown-animation');
        } else if (techStackRowContentVisibility == "flex") {
            techStackRowContent.classList.remove('dropdown-animation');
            techStackRowContent.classList.add('dropdown-animation-off');
            techStackRowContent.style.display = 'none';
        }
    }

    // Closes all the rows
    function closeAllRows(techStackRows) {
        techStackRows.forEach((techStackRow) => {
            let techStackRowContent = techStackRow.querySelector('div');

            techStackRowContent.classList.remove('dropdown-animation');
            techStackRowContent.classList.add('dropdown-animation-off');
            techStackRowContent.style.display = 'none';
        });
    }

};

export default techStackDropDownMenu;

