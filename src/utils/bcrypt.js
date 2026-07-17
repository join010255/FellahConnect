import bcrypt from bcrypt;

class BcryptMethode{
    hashPassword = async(password) => {
        try{
            const passwordHash = await bcrypt.hash(password, 10);
            return passwordHash;
        }catch(error) {
            console.log(error)
            return false
        }
    }

    comparePassword = async(passwordHash, passwordBlandText) => {
        try{
            const result = await bcrypt.compare(passwordBlandText, passwordHash);
            if(!result) return false;
            return true;
        }catch(error){
            console.log(error);
            return false;
        }
    }
}
    

export default hashPassword;