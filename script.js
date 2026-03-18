document.addEventListener('DOMContentLoaded', () => {
    const noteInput = document.getElementById('note-input');
    const addNoteBtn = document.getElementById('add-note-btn');
    const clearAllBtn = document.getElementById('clear-all-btn');
    const notesContainer = document.getElementById('notes-container');

    // Load notes from local storage on startup
    let notes = JSON.parse(localStorage.getItem('temp_notes_saver')) || [];

    // Render notes initially
    renderNotes();

    // Event Listeners
    addNoteBtn.addEventListener('click', addNote);
    clearAllBtn.addEventListener('click', clearAllNotes);

    function addNote() {
        const content = noteInput.value.trim();
        
        if (content) {
            const newNote = {
                id: Date.now().toString(),
                content: content,
                date: new Date().toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric'
                })
            };

            notes.unshift(newNote); // Add to beginning
            saveNotes();
            renderNotes();
            noteInput.value = ''; // Clear input
        }
    }

    function deleteNote(id) {
        notes = notes.filter(note => note.id !== id);
        saveNotes();
        renderNotes();
    }

    function clearAllNotes() {
        if (confirm('Are you sure you want to clear all notes?')) {
            notes = [];
            saveNotes();
            renderNotes();
        }
    }

    function saveNotes() {
        localStorage.setItem('temp_notes_saver', JSON.stringify(notes));
    }

    function renderNotes() {
        notesContainer.innerHTML = ''; // Clear current display

        if (notes.length === 0) {
            notesContainer.innerHTML = '<p style="color: var(--text-secondary); text-align: center; grid-column: 1 / -1; margin-top: 2rem;">No notes yet. Start writing above.</p>';
            return;
        }

        notes.forEach(note => {
            const noteCard = document.createElement('div');
            noteCard.className = 'note-card';
            
            noteCard.innerHTML = `
                <div class="note-content">${escapeHTML(note.content)}</div>
                <div class="note-footer">
                    <span class="note-date">${note.date}</span>
                    <button class="delete-btn" onclick="window.deleteNoteHandler('${note.id}')">Delete</button>
                </div>
            `;
            
            notesContainer.appendChild(noteCard);
        });
    }

    // Expose delete function to global scope for inline onclick handler
    window.deleteNoteHandler = deleteNote;

    // Security: basic HTML escaping to prevent XSS
    function escapeHTML(str) {
        return str.replace(/[&<>'"]/g, 
            tag => ({
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                "'": '&#39;',
                '"': '&quot;'
            }[tag] || tag)
        );
    }
});
