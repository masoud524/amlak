function togglePopup(id, show) {
    const popup = document.getElementById(id);
    if (popup) {
        popup.style.transform = show ? 'translateY(0)' : 'translateY(100%)';
        if (show) {
            showOverlay();
            document.body.style.overflow = 'hidden';
        } else {
            hideOverlay();
            document.body.style.overflow = '';
        }
    }
}
function showOverlay() {
    document.getElementById('overlay').classList.remove('hidden');
}
function hideOverlay() {
    document.getElementById('overlay').classList.add('hidden');
}
// نمونه استفاده:
// باز کردن پاپ‌آپ اتاق
// togglePopup('room-popup', true);
// بستن پاپ‌آپ امکانات
// togglePopup('amenities-popup', false);

function formatPrice(input) {
    // Remove non-digit characters
    let value = input.value.replace(/\D/g, '');
    // Add commas every three digits
    value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    input.value = value;
}
// Toggle button active state
document.querySelectorAll('.feature-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        this.classList.toggle('bg-blue-400');
        this.classList.toggle('border-blue-600');
        this.classList.toggle('bg-white');
        this.classList.toggle('text-gray-700');
        this.classList.toggle('border-gray-300');
    });
});