interface IUserGithub{
    avatar_url:string,
    bio:string | null,
    blog: string,
    created_at: string,
    email:string|null,
    followers:number,
    following:number,
    html_url:string,
    login:string,
    location:string|null,
    name:string,
    public_repos:number,
    repos_url:string
}

interface IRepositoryGithub {
    name:string,
    language:string,
    description:string|null,
    created_at:string,
    pushed_at:string,
    svn_url:string
}