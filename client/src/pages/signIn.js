import './signIn.css';

export default function Signin() {
    return (
        <div class="sign-container">

        <h1>Welcome to nEARby!</h1>
            <form id="sign-in" title="sign-in">

            <label for="FirstN">First Name:</label>
                <input type="text" id="FirstN" name="FirstN" placeholder="First Name"/>

            <label for="LastN">Last Name:</label>
                <input type="text" id="LastN" name="LastN" placeholder="Last Name"/>

            <label for="Email">Email:</label>
            <input type="text" id="Email" placeholder="Email"/>

            <label for="CE">Confirm Email:</label>
                <input type="text" id="CE" name="CE" placeholder="Confirm Email"/>
            
                <label for="Password">Password:</label>
                <input type="text" id="Password" name="Password" placeholder="Password"/>
            
            <button id="sign-up-button">Sign Up</button>

            <p>Already have an account?</p>
            <p>Log In</p>
            </form>


    </div>

    );
}