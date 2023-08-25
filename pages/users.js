import User from '../components/user';

function UserList({ users }) {
    return (
        <>
            <h1>List of users</h1>
            {users.map((user) => {
                return (
                    <div key={user.id}>
                        <ol>
                            <User user={user}/>
                        </ol>
                    </div>
                )
            })}
        </>
    )
}
export default UserList

export async function getStaticProps() {
    const responsed = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await responsed.json()
    console.log(data);
    return {
        props: {
            users:data,
        },
    }
}