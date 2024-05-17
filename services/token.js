import jwt from 'jsonwebtoken'

const generateJWTToken = userId => {
	const accessToken = jwt.sign({userId},'javoh', {expiresIn: '30d'})

	return accessToken
}

export {generateJWTToken}
