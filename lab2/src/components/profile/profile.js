import './profile.css'
let Profile = () => {
    return (
        <div className='my-container m-auto d-flex align-items-center flex-column justify-content-center'>
            <div class="wrapper header">
                <img class="mel" src="./images/user.jpg" alt="img" />
                <h1 className='name'>Welcome Mariam</h1>
                <p className='desc'>Full stack web developer</p>
            </div>
            <div class="wrapper footer">
                <p className='desc'>A simple profile card</p>
            </div>
        </div>

    )
}
export default Profile;