document.addEventListener("DOMContentLoaded", function() {
    // 1. ระบบโหมดมืด (ที่คุณใช้อยู่แล้ว)
    const themeBtn = document.getElementById('theme-toggle');
    const body = document.body;

    if(themeBtn) {
        themeBtn.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            themeBtn.textContent = body.classList.contains('dark-mode') ? '☀️ โหมดสว่าง' : '🌙 โหมดมืด';
        });
    }

    // 2. ระบบปุ่มส่งข้อความ (ที่ต้องเพิ่ม/แก้ไข)
    const contactForm = document.getElementById('contact-form');
if(contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); 
        alert('ขอบคุณที่ติดต่อเรา!...');
        this.reset();
    });
}
