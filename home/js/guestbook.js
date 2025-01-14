const app = Vue.createApp({
    data() {
        return {
            guestName: '',
            guestNickname: '',
            guestMessage: '',
            guestbookEntries: [], 
            confirmationMessage: '' 
        };
    },
    methods: {
        addEntry() {
            const newEntry = {
                name: this.guestName,
                nickname: this.guestNickname,
                message: this.guestMessage
            };
            this.guestbookEntries.push(newEntry);
            
            this.confirmationMessage = `Your message has been submitted, ${this.guestName}!`;

            this.guestName = '';
            this.guestNickname = '';
            this.guestMessage = '';

            // this clears all the inputted info for the form
            setTimeout(() => {
                this.confirmationMessage = '';
            }, 5000);
        }
    }
});

app.mount('#app');
