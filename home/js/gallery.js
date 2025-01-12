const app = Vue.createApp({
    data() {
      return {
        photos: [
          { name: 'Profile', url: 'images/me.png' },
          { name: 'Me in Cebu', url: 'images/me in cebu.png' },
          { name: 'My niece and dog', url: 'images/my niece and dog.png' },
          { name: 'My friends', url: 'images/friends4.png' },
          { name: 'My friends', url: 'images/friends2.png' },
          { name: 'My family', url: 'images/family.jpg' },
        ]
      };
    }
  });

  app.mount('#app');
