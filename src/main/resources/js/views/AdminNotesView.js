/*
 * Copyright (c) 2015 Vitaly Burlai <vitaly.burlai@gmail.com>
 */

/**
 * Button with indication of the number of notes, used by AdminNotesListView
 *
 */
var AdminNotesView = {
    $: AJS.$,
    INTEGRATION: {
        'plugins': '#upm-container .upm-more-actions',
        'macros': '#admin-heading-container'
    },
    count: 0,
    countSpan: null,
    elem: null,
    checkbox: null,
    context: 'plugins',

    init: function (context) {
        if (this.elem === null) {
            this.context = context;
            this.countSpan = this.$('<div class="count">' + this.count + '</div>');
            if (this.count === 0) {
                this.countSpan.addClass('invisible');
            }

            this.elem = this.$('<label for="confluence-admin-notes-list-shown"' +
                               ' id="confluence-admin-notes"' +
                               ' title="Admin Notes" />');
            this.elem.append(this.countSpan);
            
            

            this.elem.appendTo(this.INTEGRATION[this.context]);

            this.checkbox = AJS.$('<input type="checkbox" id="confluence-admin-notes-list-shown" />');
            this.elem.after(this.checkbox);
        }
    },

    /**
     * Update count display, called from AdminNotesListView
     */
    setCount: function (count) {
        this.count = count;
        if (this.countSpan) {
            if (count === 0) {
                this.countSpan.addClass('invisible');
            } else {
                this.countSpan.removeClass('invisible');
            }
            this.countSpan.text(count);
        }

    },

    /**
     * Hides AdminNotesListView
     */
    hideList: function () {
        this.checkbox.prop('checked', false);
    },

    /**
     * Shows AdminNotesListView
     */
    showList: function () {
        this.checkbox.prop('checked', true);
    }
};

