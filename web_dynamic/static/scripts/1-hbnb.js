$(document).ready(function () {
    // Initialize an empty array to store the Amenity IDs
    var checkedAmenities = [];

    // Function to update the h4 tag with the list of checked Amenities
    function updateAmenitiesList() {
        // Clear the existing content of the h4 tag
        $('div.amenities h4').empty();

        // Iterate over the checkedAmenities array and append each Amenity ID to the h4 tag
        for (var i = 0; i < checkedAmenities.length; i++) {
            $('div.amenities h4').append(checkedAmenities[i] + ', ');
        }
    }

    // Listen for changes on each input checkbox tag
    $('input[type="checkbox"]').change(function () {
        // Get the Amenity ID and name from the data attributes of the checkbox
        var amenityId = $(this).data('id');
        var amenityName = $(this).data('name');

        // Check if the checkbox is checked
        if ($(this).is(':checked')) {
            // If checked, add the Amenity ID to the checkedAmenities array
            checkedAmenities.push(amenityId);
        } else {
            // If unchecked, remove the Amenity ID from the checkedAmenities array
            var index = checkedAmenities.indexOf(amenityId);
            if (index !== -1) {
                checkedAmenities.splice(index, 1);
            }
        }

        // Update the h4 tag with the list of checked Amenities
        updateAmenitiesList();
    });
});
