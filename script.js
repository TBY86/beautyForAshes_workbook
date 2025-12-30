// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Load saved data from localStorage
    const textareas = document.querySelectorAll('textarea');
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const navButtons = document.querySelectorAll('.navigation button');
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.dataset.target;
            const targetSection = document.getElementById(targetId);
            if (targetSection && targetId !== 'page1') {
                // Hide all other sections except page1 and the target
                document.querySelectorAll('.page:not(#page1)').forEach(page => {
                    if (page.id !== targetId) {
                        page.style.display = 'none';
                    }
                });
                targetSection.style.display = 'block';
                targetSection.scrollIntoView({ behavior: 'smooth' });
            } else if (targetId === 'page1') {
                // For page1, hide all other sections and scroll to page1
                document.querySelectorAll('.page:not(#page1)').forEach(page => {
                    page.style.display = 'none';
                });
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    textareas.forEach(textarea => {
        const key = textarea.dataset.key;
        if (key) {
            textarea.value = localStorage.getItem(key) || '';
            textarea.addEventListener('input', () => {
                localStorage.setItem(key, textarea.value);
            });
        }
    });

    checkboxes.forEach(checkbox => {
        const key = checkbox.dataset.key;
        if (key) {
            checkbox.checked = localStorage.getItem(key) === 'true';
            checkbox.addEventListener('change', () => {
                localStorage.setItem(key, checkbox.checked);
            });
        }
    });

    // Hover animations for journal sections
    const journalSections = document.querySelectorAll('.journal-section');
    journalSections.forEach(section => {
        section.addEventListener('mouseenter', () => {
            section.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.15)';
            section.style.transition = 'box-shadow 0.3s ease';
        });
        section.addEventListener('mouseleave', () => {
            section.style.boxShadow = 'none';
        });
    });

    // Click animation for completion
    const completions = document.querySelectorAll('.completion');
    completions.forEach(completion => {
        completion.addEventListener('click', () => {
            if (completion.querySelector('input').checked) {
                completion.style.backgroundColor = '#c8e6c9'; // Slightly darker green
                setTimeout(() => {
                    completion.style.backgroundColor = '#e8f5e9';
                }, 300);
            }
        });
    });
});