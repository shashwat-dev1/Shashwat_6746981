class Login {
    usernameTF: string
    passwordTF: string
    submitBtn: any

    constructor(page) {
        this.usernameTF = page.locator("#username")
        this.passwordTF = page.locator("#password")
        this.submitBtn = page.locator("#submit")
    }

    async login(username: string, password: string){
        await this.usernameTF.fill(username)
        await this.passwordTF.fill(password)
        await this.submitBtn.click()
    }
}

export default Login