const SignUpForm = () => {
    return (
        <> 
            <form action="">

                <label htmlFor="name">Name</label>
                <input type="text" name="name" placeholder="Name" id="name"/>

                <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder="Email" id="email"/>

                <label htmlFor="password">Password</label>
                <input type="password" name="password" placeholder="Password" id="password"/>

                <label htmlFor="confirmPassword">Confirm Password</label>
                <input type="password" name="confirmPassword" placeholder="Confirm Password" id="confirmPassword"/>

                <button type="submit">Sign Up</button>

            </form>
        </>
    )
}

export default SignUpForm;