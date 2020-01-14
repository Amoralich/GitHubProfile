class GitHub{

    constructor(){
        this.client_ID = '9c775ec35ceead64291d';
        this.client_secret = '718d03e8aaed5f7ee1c935d558ee73b3cd0cd286';
        this.user = 'Amoralich';
        this.apiUrl = "https://api.github.com/users/";
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUserData(){
        let urlProfile = `${this.apiUrl}${this.user}?client_id=${this.client_ID}&client_secret=${this.client_secret}`;
    }



}