import bcrypt from "bcryptjs"
const Secure=async (password)=>{

    const salt = await bcrypt.genSalt(10);
    const securePassword = await bcrypt.hash(password,salt)

    return securePassword;
}
export {Secure};