new Vue({
    el: '#app',
    data: {
        monsterHealth: 100
    },
    methods: {
        attack: function () {
            this.monsterHealth -= 10;
        }
    }
});