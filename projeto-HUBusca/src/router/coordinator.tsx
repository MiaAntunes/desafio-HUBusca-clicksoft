export const goToHomePage = (navigate:any) => {
    return navigate('/')
}

export const goToPostIdPage = (navigate:any, id:string) => {
    return navigate(`/${id}`)
}