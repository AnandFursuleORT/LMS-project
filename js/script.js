document.querySelectorAll('.dropdown-menu').forEach(item => {
    item.addEventListener('click', function (e) {
        e.stopPropagation();
    });
});


// ========================= Notifications js code ====================================

//  Prevent dropdown from closing when clicking inside (including notifications)
document.querySelector(".dropdown-menu").addEventListener("click", function (event) {
    event.stopPropagation();
});

// Remove only the clicked notification, dropdown stays open
function removeNotification(event, button) {
    event.stopPropagation(); // Prevent Bootstrap from closing the dropdown
    button.closest(".notification-item").remove();
}

// Filter Dropdown code

function setupSearchAndCheckboxBehavior(searchInputId, listId) {
    const searchInput = document.getElementById(searchInputId);
    const checkboxes = document.querySelectorAll(`#${listId} .form-check-input`);

    // Filter the checkbox list based on the search input
    searchInput.addEventListener('input', function () {
        const searchValue = this.value.toLowerCase().trim();
        checkboxes.forEach(checkbox => {
            const label = checkbox.nextElementSibling.textContent.toLowerCase();
            checkbox.parentElement.style.display = label.includes(searchValue) ? '' : 'none';
        });
    });

    // Clear the search input when any checkbox is selected
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function () {
            searchInput.value = '';
        });
    });
}

// Setup for all the search and checkbox combinations
setupSearchAndCheckboxBehavior('locationSearch', 'locationList');
setupSearchAndCheckboxBehavior('RankSearch', 'RankList');
setupSearchAndCheckboxBehavior('VesselSearch', 'VesselList');
setupSearchAndCheckboxBehavior('DurationSearch', 'DurationList');
setupSearchAndCheckboxBehavior('BridgeSearch', 'BridgeList');
setupSearchAndCheckboxBehavior('EngineSearch', 'EngineList');
