angular.module('mynotes.notestore', []).factory('NoteStore', function () {

    var notes = angular.fromJson(window.localStorage['notes'] || '[]');

    function persist() {
        window.localStorage['notes'] = angular.toJson(notes);
    }

    return {

        //Return the list of notes
        list: function () {
            return notes;
        },

        //Return the note with the specific Id
        get: function (noteId) {
            for (var i = 0; i < notes.length; i++) {
                if (notes[i].id === noteId) {
                    return notes[i];
                }
            }
            return undefined;
        },

        //Add note in the list of notes
        create: function (note) {
            notes.push(note);
            persist();
        },

        //Update the note
        update: function (note) {
            for (var i = 0; i < notes.length; i++) {
                if (notes[i].id === note.id) {
                    notes[i] = note;
                    persist();
                    return;
                }
            }
        }
    }

});