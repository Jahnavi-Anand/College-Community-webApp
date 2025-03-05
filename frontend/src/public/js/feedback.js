document.addEventListener("DOMContentLoaded", function () {
    const facilityDropdown = document.getElementById("facility");
    const categoryDropdown = document.getElementById("category");

    const facilities = {
        cafes: ["Cafe A", "Cafe B", "Cafe C"],
        hostels: ["Hostel X", "Hostel Y", "Hostel Z"],
        doctors: ["Doctor 1", "Doctor 2", "Doctor 3"],
        deli: ["Deli Shop 1", "Deli Shop 2"],
        cabs: ["Cab Service 1", "Cab Service 2", "Cab Service 3"]
    };

    categoryDropdown.addEventListener("change", function () {
        const selectedCategory = categoryDropdown.value;
        facilityDropdown.innerHTML = '<option value="">-- Select Facility --</option>';

        if (facilities[selectedCategory]) {
            facilities[selectedCategory].forEach(facility => {
                let option = document.createElement("option");
                option.value = facility.toLowerCase().replace(/\s+/g, "-");
                option.textContent = facility;
                facilityDropdown.appendChild(option);
            });
        }
    });
});
