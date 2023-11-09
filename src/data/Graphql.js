import { gql, useQuery } from '@apollo/client';


const GET_CAT_LIKE = gql`
    query Likes($name: String!) {
        likes(name: $name) {
            name
            likes
    }
  }
`

const GET_ALL_LIKE = gql`
    query AllLikes {
        allLikes {
            name
            likes
        }
    }
`

export const GetLike = (catname) => {
    const { data, loading, error } = useQuery(GET_CAT_LIKE, {variables: {name: catname}});
    
    if (error) return 'Error';
    if (loading) return 'Loading';


    return data.likes.map(l => l.likes);

    // return data.Likes.likes;
}

export const GetAllLike = () => {
    const { data, loading, error } = useQuery(GET_ALL_LIKE);

    if (error) return 'Error';
    if (loading) return 'Loading';


    return data;
}