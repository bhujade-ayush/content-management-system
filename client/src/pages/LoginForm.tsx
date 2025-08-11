const LoginForm = () => {
    return (
        <> 
            <form action="" className="border w-full flex flex-col gap-6 max-w-md items-center">
                <div>Login Form</div>
                <div className="flex flex-col">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" placeholder="Email" id="email"/>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" placeholder="Password" id="password"/>
                </div>
                <div className="flex flex-col">
                    <button type="submit">Login</button>
                </div>

            </form>
        </>
    )
}

export default LoginForm;