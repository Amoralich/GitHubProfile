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
        let urlRepos = `${this.apiUrl}${this.user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_ID}&client_secret=${this.client_secret}`;

        const profileResponse = await fetch(urlProfile);
        const reposResponse = await fetch(urlRepos);

        const profile = await profileResponse.json();
        const repos = await reposResponse.json();

        return{
            profile,
            repos
        }
    }



}